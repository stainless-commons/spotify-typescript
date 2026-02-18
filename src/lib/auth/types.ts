import type { Fetch } from '../../internal/builtin-types';

export interface AccessTokenAuth {
  type: 'access_token';
  accessToken: string;
}

export interface ClientCredentialsAuth {
  type: 'client_credentials';
  clientId: string;
  clientSecret: string;
}

export type AuthConfig = AccessTokenAuth | ClientCredentialsAuth;

export interface TokenManagerOptions {
  auth: AuthConfig;
  fetch?: Fetch | undefined;
  tokenEndpoint?: string | undefined;
  expiryBufferSeconds?: number | undefined;
}
