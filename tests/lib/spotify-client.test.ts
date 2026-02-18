import { SpotifyClient } from '@stainless-commons/spotify/lib/spotify-client';

function mockFetch(handler: (url: string | URL | Request, init?: RequestInit) => Promise<Response>) {
  return handler as unknown as typeof fetch;
}

function jsonResponse(data: object = {}) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

function tokenResponse(accessToken: string = 'fetched-token', expiresIn: number = 3600) {
  return new Response(
    JSON.stringify({ access_token: accessToken, expires_in: expiresIn, token_type: 'bearer' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
}

describe('SpotifyClient', () => {
  describe('access token auth', () => {
    test('string shorthand sets Bearer header', async () => {
      const client = new SpotifyClient({
        auth: 'my-token',
        baseURL: 'http://localhost:5000/',
      });

      const { req } = await client.buildRequest({ path: '/foo', method: 'get' });
      expect(req.headers.get('authorization')).toBe('Bearer my-token');
    });

    test('object form sets Bearer header', async () => {
      const client = new SpotifyClient({
        auth: { type: 'access_token', accessToken: 'my-token' },
        baseURL: 'http://localhost:5000/',
      });

      const { req } = await client.buildRequest({ path: '/foo', method: 'get' });
      expect(req.headers.get('authorization')).toBe('Bearer my-token');
    });
  });

  describe('client credentials auth', () => {
    test('fetches token and uses it for API requests', async () => {
      const requests: { url: string; init?: RequestInit }[] = [];

      const fetchFn = mockFetch(async (url, init) => {
        const urlStr = typeof url === 'string' ? url : url.toString();
        requests.push({ url: urlStr, ...(init !== undefined ? { init } : {}) });

        if (urlStr.includes('accounts.spotify.com')) {
          return tokenResponse('cc-token');
        }
        return jsonResponse({ data: 'test' });
      });

      const client = new SpotifyClient({
        auth: {
          type: 'client_credentials',
          clientId: 'my-id',
          clientSecret: 'my-secret',
        },
        baseURL: 'http://localhost:5000/',
        fetch: fetchFn,
      });

      const response = await client.get('/albums/123');

      expect(response).toEqual({ data: 'test' });
      expect(requests).toHaveLength(2);
      // First request is the token fetch
      expect(requests[0]!.url).toBe('https://accounts.spotify.com/api/token');
      // Second request is the API call with the fetched token
      const apiHeaders = requests[1]!.init?.headers;
      const authHeader =
        apiHeaders instanceof Headers
          ? apiHeaders.get('authorization')
          : (apiHeaders as Record<string, string>)?.['authorization'];
      expect(authHeader).toBe('Bearer cc-token');
    });

    test('token refresh happens transparently', async () => {
      let tokenFetchCount = 0;

      const fetchFn = mockFetch(async (url) => {
        const urlStr = typeof url === 'string' ? url : url.toString();
        if (urlStr.includes('accounts.spotify.com')) {
          tokenFetchCount++;
          return tokenResponse(`token-${tokenFetchCount}`, 3600);
        }
        return jsonResponse();
      });

      const client = new SpotifyClient({
        auth: {
          type: 'client_credentials',
          clientId: 'my-id',
          clientSecret: 'my-secret',
        },
        baseURL: 'http://localhost:5000/',
        fetch: fetchFn,
        expiryBufferSeconds: 0,
      } as any);

      const now = Date.now;
      try {
        let currentTime = 1000000;
        Date.now = () => currentTime;

        await client.get('/test1');
        expect(tokenFetchCount).toBe(1);

        // Advance past token expiry
        currentTime += 3601 * 1000;

        await client.get('/test2');
        expect(tokenFetchCount).toBe(2);
      } finally {
        Date.now = now;
      }
    });
  });

  describe('resource accessors', () => {
    test('all resource accessors are available', () => {
      const client = new SpotifyClient({
        auth: 'my-token',
        baseURL: 'http://localhost:5000/',
      });

      expect(client.albums).toBeDefined();
      expect(client.artists).toBeDefined();
      expect(client.shows).toBeDefined();
      expect(client.episodes).toBeDefined();
      expect(client.audiobooks).toBeDefined();
      expect(client.me).toBeDefined();
      expect(client.chapters).toBeDefined();
      expect(client.tracks).toBeDefined();
      expect(client.search).toBeDefined();
      expect(client.playlists).toBeDefined();
      expect(client.users).toBeDefined();
      expect(client.browse).toBeDefined();
      expect(client.audioFeatures).toBeDefined();
      expect(client.audioAnalysis).toBeDefined();
      expect(client.recommendations).toBeDefined();
      expect(client.markets).toBeDefined();
    });
  });

  describe('error propagation', () => {
    test('propagates token fetch errors', async () => {
      const fetchFn = mockFetch(async (url) => {
        const urlStr = typeof url === 'string' ? url : url.toString();
        if (urlStr.includes('accounts.spotify.com')) {
          return new Response('Bad credentials', { status: 401, statusText: 'Unauthorized' });
        }
        return jsonResponse();
      });

      const client = new SpotifyClient({
        auth: {
          type: 'client_credentials',
          clientId: 'bad-id',
          clientSecret: 'bad-secret',
        },
        baseURL: 'http://localhost:5000/',
        fetch: fetchFn,
      });

      await expect(client.get('/foo')).rejects.toThrow('Failed to fetch client credentials token');
    });
  });

  describe('withOptions', () => {
    test('returns SpotifyClient preserving auth config', () => {
      const client = new SpotifyClient({
        auth: 'my-token',
        baseURL: 'http://localhost:5000/',
      });

      const newClient = client.withOptions({
        baseURL: 'http://localhost:6000/',
      });

      expect(newClient).toBeInstanceOf(SpotifyClient);
      expect(newClient.baseURL).toBe('http://localhost:6000/');
    });

    test('can override auth', async () => {
      const client = new SpotifyClient({
        auth: 'old-token',
        baseURL: 'http://localhost:5000/',
      });

      const newClient = client.withOptions({
        auth: 'new-token',
      });

      const { req } = await newClient.buildRequest({ path: '/foo', method: 'get' });
      expect(req.headers.get('authorization')).toBe('Bearer new-token');
    });
  });

  describe('custom fetch', () => {
    test('custom fetch is used for both token and API requests', async () => {
      let fetchCallCount = 0;
      const fetchFn = mockFetch(async (url) => {
        fetchCallCount++;
        const urlStr = typeof url === 'string' ? url : url.toString();
        if (urlStr.includes('accounts.spotify.com')) {
          return tokenResponse();
        }
        return jsonResponse({ custom: true });
      });

      const client = new SpotifyClient({
        auth: {
          type: 'client_credentials',
          clientId: 'id',
          clientSecret: 'secret',
        },
        baseURL: 'http://localhost:5000/',
        fetch: fetchFn,
      });

      await client.get('/test');
      expect(fetchCallCount).toBe(2);
    });
  });
});
