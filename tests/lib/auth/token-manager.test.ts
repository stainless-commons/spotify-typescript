import { TokenManager } from '@stainless-commons/spotify/lib/auth/token-manager';
import type { AuthConfig } from '@stainless-commons/spotify/lib/auth/types';

function mockFetch(handler: (url: string, init: RequestInit) => Promise<Response>) {
  return handler as unknown as typeof fetch;
}

function tokenResponse(accessToken: string, expiresIn: number) {
  return new Response(
    JSON.stringify({ access_token: accessToken, expires_in: expiresIn, token_type: 'bearer' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
}

describe('TokenManager', () => {
  describe('access_token auth', () => {
    test('returns static token immediately with no HTTP calls', async () => {
      const fetchFn = jest.fn();
      const manager = new TokenManager({
        auth: { type: 'access_token', accessToken: 'my-static-token' },
        fetch: fetchFn as any,
      });

      const token = await manager.getAccessToken();
      expect(token).toBe('my-static-token');
      expect(fetchFn).not.toHaveBeenCalled();
    });
  });

  describe('client_credentials auth', () => {
    const auth: AuthConfig = {
      type: 'client_credentials',
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
    };

    test('fetches token with correct request format', async () => {
      let capturedUrl: string | undefined;
      let capturedInit: RequestInit | undefined;

      const fetchFn = mockFetch(async (url, init) => {
        capturedUrl = url;
        capturedInit = init;
        return tokenResponse('new-token', 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn });
      const token = await manager.getAccessToken();

      expect(token).toBe('new-token');
      expect(capturedUrl).toBe('https://accounts.spotify.com/api/token');
      expect(capturedInit?.method).toBe('POST');

      const headers = capturedInit?.headers as Record<string, string>;
      expect(headers['Content-Type']).toBe('application/x-www-form-urlencoded');

      const expectedCredentials = Buffer.from('test-client-id:test-client-secret').toString('base64');
      expect(headers['Authorization']).toBe(`Basic ${expectedCredentials}`);
      expect(capturedInit?.body).toBe('grant_type=client_credentials');
    });

    test('caches token within TTL', async () => {
      let fetchCount = 0;
      const fetchFn = mockFetch(async () => {
        fetchCount++;
        return tokenResponse('cached-token', 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn });

      const token1 = await manager.getAccessToken();
      const token2 = await manager.getAccessToken();

      expect(token1).toBe('cached-token');
      expect(token2).toBe('cached-token');
      expect(fetchCount).toBe(1);
    });

    test('refreshes token after expiry', async () => {
      let fetchCount = 0;
      const fetchFn = mockFetch(async () => {
        fetchCount++;
        return tokenResponse(`token-${fetchCount}`, 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn, expiryBufferSeconds: 0 });
      const now = Date.now;

      try {
        let currentTime = 1000000;
        Date.now = () => currentTime;

        const token1 = await manager.getAccessToken();
        expect(token1).toBe('token-1');

        // Advance past expiry (3600s)
        currentTime += 3601 * 1000;

        const token2 = await manager.getAccessToken();
        expect(token2).toBe('token-2');
        expect(fetchCount).toBe(2);
      } finally {
        Date.now = now;
      }
    });

    test('applies expiry buffer', async () => {
      let fetchCount = 0;
      const fetchFn = mockFetch(async () => {
        fetchCount++;
        return tokenResponse(`token-${fetchCount}`, 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn, expiryBufferSeconds: 300 });
      const now = Date.now;

      try {
        let currentTime = 1000000;
        Date.now = () => currentTime;

        await manager.getAccessToken();
        expect(fetchCount).toBe(1);

        // Advance to within buffer zone (3600 - 300 = 3300s effective TTL)
        currentTime += 3301 * 1000;

        await manager.getAccessToken();
        expect(fetchCount).toBe(2);
      } finally {
        Date.now = now;
      }
    });

    test('deduplicates concurrent requests', async () => {
      let fetchCount = 0;
      const fetchFn = mockFetch(async () => {
        fetchCount++;
        // Simulate network delay
        await new Promise((r) => setTimeout(r, 10));
        return tokenResponse('deduped-token', 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn });

      const results = await Promise.all([
        manager.getAccessToken(),
        manager.getAccessToken(),
        manager.getAccessToken(),
        manager.getAccessToken(),
        manager.getAccessToken(),
      ]);

      expect(results).toEqual(Array(5).fill('deduped-token'));
      expect(fetchCount).toBe(1);
    });

    test('throws on HTTP error without caching failure', async () => {
      let fetchCount = 0;
      const fetchFn = mockFetch(async () => {
        fetchCount++;
        if (fetchCount === 1) {
          return new Response('Unauthorized', { status: 401, statusText: 'Unauthorized' });
        }
        return tokenResponse('recovered-token', 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn });

      await expect(manager.getAccessToken()).rejects.toThrow(
        'Failed to fetch client credentials token: 401 Unauthorized - Unauthorized',
      );

      // Should retry on next call since failure wasn't cached
      const token = await manager.getAccessToken();
      expect(token).toBe('recovered-token');
      expect(fetchCount).toBe(2);
    });

    test('propagates network errors and allows retry', async () => {
      let fetchCount = 0;
      const fetchFn = mockFetch(async () => {
        fetchCount++;
        if (fetchCount === 1) {
          throw new Error('Network failure');
        }
        return tokenResponse('recovered-token', 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn });

      await expect(manager.getAccessToken()).rejects.toThrow('Network failure');

      const token = await manager.getAccessToken();
      expect(token).toBe('recovered-token');
      expect(fetchCount).toBe(2);
    });

    test('clearCache forces re-fetch', async () => {
      let fetchCount = 0;
      const fetchFn = mockFetch(async () => {
        fetchCount++;
        return tokenResponse(`token-${fetchCount}`, 3600);
      });

      const manager = new TokenManager({ auth, fetch: fetchFn });

      const token1 = await manager.getAccessToken();
      expect(token1).toBe('token-1');

      manager.clearCache();

      const token2 = await manager.getAccessToken();
      expect(token2).toBe('token-2');
      expect(fetchCount).toBe(2);
    });

    test('uses custom token endpoint', async () => {
      let capturedUrl: string | undefined;
      const fetchFn = mockFetch(async (url) => {
        capturedUrl = url;
        return tokenResponse('token', 3600);
      });

      const manager = new TokenManager({
        auth,
        fetch: fetchFn,
        tokenEndpoint: 'https://custom.example.com/token',
      });

      await manager.getAccessToken();
      expect(capturedUrl).toBe('https://custom.example.com/token');
    });
  });
});
