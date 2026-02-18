import type { Fetch } from '../../internal/builtin-types';
import { toBase64 } from '../../internal/utils/base64';
import type { AuthConfig, TokenManagerOptions } from './types';

const DEFAULT_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const DEFAULT_EXPIRY_BUFFER_SECONDS = 300;

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}

export class TokenManager {
  private auth: AuthConfig;
  private fetch: Fetch;
  private tokenEndpoint: string;
  private expiryBufferSeconds: number;
  private cachedToken: CachedToken | null = null;
  private refreshPromise: Promise<string> | null = null;

  constructor(options: TokenManagerOptions) {
    this.auth = options.auth;
    this.fetch = options.fetch ?? globalThis.fetch;
    this.tokenEndpoint = options.tokenEndpoint ?? DEFAULT_TOKEN_ENDPOINT;
    this.expiryBufferSeconds = options.expiryBufferSeconds ?? DEFAULT_EXPIRY_BUFFER_SECONDS;
  }

  async getAccessToken(): Promise<string> {
    if (this.auth.type === 'access_token') {
      return this.auth.accessToken;
    }

    if (this.cachedToken && Date.now() < this.cachedToken.expiresAt) {
      return this.cachedToken.accessToken;
    }

    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = this.fetchClientCredentialsToken();

    try {
      return await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  clearCache(): void {
    this.cachedToken = null;
    this.refreshPromise = null;
  }

  private async fetchClientCredentialsToken(): Promise<string> {
    const { clientId, clientSecret } = this.auth as { clientId: string; clientSecret: string };
    const credentials = toBase64(`${clientId}:${clientSecret}`);

    const response = await this.fetch.call(undefined, this.tokenEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new Error(
        `Failed to fetch client credentials token: ${response.status} ${response.statusText}${body ? ` - ${body}` : ''}`,
      );
    }

    const data = (await response.json()) as { access_token: string; expires_in: number; token_type: string };

    this.cachedToken = {
      accessToken: data.access_token,
      expiresAt: Date.now() + (data.expires_in - this.expiryBufferSeconds) * 1000,
    };

    return data.access_token;
  }
}
