import { Spotify, type ClientOptions } from '../client';
import type { NullableHeaders } from '../internal/headers';
import { buildHeaders } from '../internal/headers';
import type { FinalRequestOptions } from '../internal/request-options';
import { TokenManager } from './auth/token-manager';
import type { AuthConfig } from './auth/types';

export interface SpotifyClientOptions extends Omit<ClientOptions, 'accessToken'> {
  auth: AuthConfig | string;
}

export class SpotifyClient extends Spotify {
  private tokenManager: TokenManager;
  private authConfig: AuthConfig;

  constructor(options: SpotifyClientOptions) {
    if (!options.auth) {
      throw new Error(
        'The `auth` option is required. Pass an access token string or an AuthConfig object.',
      );
    }

    const authConfig: AuthConfig =
      typeof options.auth === 'string'
        ? { type: 'access_token', accessToken: options.auth }
        : options.auth;

    const accessToken =
      authConfig.type === 'access_token' ? authConfig.accessToken : '__deferred__';

    super({ ...options, accessToken });

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
