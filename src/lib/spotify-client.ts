import { Spotify, type ClientOptions } from '../client';
import type { NullableHeaders } from '../internal/headers';
import { buildHeaders } from '../internal/headers';
import type { FinalRequestOptions } from '../internal/request-options';
import { TokenManager } from './auth/token-manager';
import type { AuthConfig } from './auth/types';

export interface SpotifyClientOptions extends Omit<ClientOptions, 'accessToken'> {
  auth?: AuthConfig | string | undefined;
}

export class SpotifyClient extends Spotify {
  private tokenManager: TokenManager;
  private authConfig: AuthConfig;

  constructor(options: SpotifyClientOptions = {}) {
    const resolvedAuth = options.auth ?? process.env['SPOTIFY_ACCESS_TOKEN'];

    if (!resolvedAuth) {
      throw new Error(
        'No authentication provided. Pass an `auth` option (access token string or AuthConfig object) ' +
          'or set the SPOTIFY_ACCESS_TOKEN environment variable.',
      );
    }

    const authConfig: AuthConfig =
      typeof resolvedAuth === 'string' ? { type: 'access_token', accessToken: resolvedAuth } : resolvedAuth;

    const { auth: _auth, ...baseOptions } = options;
    super(baseOptions);

    this.authConfig = authConfig;
    this.tokenManager = new TokenManager({
      auth: authConfig,
      fetch: options.fetch,
      tokenEndpoint: (options as any).tokenEndpoint,
      expiryBufferSeconds: (options as any).expiryBufferSeconds,
    });
  }

  protected override async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    const token = await this.tokenManager.getAccessToken();
    return buildHeaders([{ Authorization: `Bearer ${token}` }]);
  }

  override withOptions(options: Partial<SpotifyClientOptions>): this {
    const auth = options.auth ?? this.authConfig;
    const merged = { ...options, auth } as SpotifyClientOptions;

    const client = new SpotifyClient(merged) as this;
    return client;
  }
}
