// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Spotify } from '../client';

export abstract class APIResource {
  protected _client: Spotify;

  constructor(client: Spotify) {
    this._client = client;
  }
}
