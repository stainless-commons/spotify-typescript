// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Library extends APIResource {
  /**
   * Check if one or more items are already saved in the current user's library.
   * Accepts Spotify URIs for tracks, albums, episodes, shows, audiobooks, artists,
   * users, and playlists.
   *
   * @example
   * ```ts
   * const response = await client.me.library.checkSavedItems({
   *   uris: 'spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy,spotify:artist:2takcwOaAZWiXQijPHIx7B',
   * });
   * ```
   */
  checkSavedItems(
    query: LibraryCheckSavedItemsParams,
    options?: RequestOptions,
  ): APIPromise<LibraryCheckSavedItemsResponse> {
    return this._client.get('/me/library/contains', { query, ...options });
  }

  /**
   * Remove one or more items from the current user's library. Accepts Spotify URIs
   * for tracks, albums, episodes, shows, audiobooks, users, and playlists.
   *
   * @example
   * ```ts
   * await client.me.library.removeItems({
   *   uris: 'spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy',
   * });
   * ```
   */
  removeItems(params: LibraryRemoveItemsParams, options?: RequestOptions): APIPromise<void> {
    const { uris } = params;
    return this._client.delete('/me/library', {
      query: { uris },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add one or more items to the current user's library. Accepts Spotify URIs for
   * tracks, albums, episodes, shows, audiobooks, users, and playlists.
   *
   * @example
   * ```ts
   * await client.me.library.saveItems({
   *   uris: 'spotify:track:7a3LWj5xSFhFRYmztS8wgK,spotify:album:4aawyAB9vmqN3uQ7FjRGTy',
   * });
   * ```
   */
  saveItems(params: LibrarySaveItemsParams, options?: RequestOptions): APIPromise<void> {
    const { uris } = params;
    return this._client.put('/me/library', {
      query: { uris },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type LibraryCheckSavedItemsResponse = Array<boolean>;

export interface LibraryCheckSavedItemsParams {
  /**
   * A comma-separated list of
   * [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40
   * URIs.
   *
   * Supported URI types:
   *
   * - `spotify:track:{id}`
   * - `spotify:album:{id}`
   * - `spotify:episode:{id}`
   * - `spotify:show:{id}`
   * - `spotify:audiobook:{id}`
   * - `spotify:artist:{id}`
   * - `spotify:user:{id}`
   * - `spotify:playlist:{id}`
   */
  uris: string;
}

export interface LibraryRemoveItemsParams {
  /**
   * A comma-separated list of
   * [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40
   * URIs.
   *
   * Supported URI types:
   *
   * - `spotify:track:{id}`
   * - `spotify:album:{id}`
   * - `spotify:episode:{id}`
   * - `spotify:show:{id}`
   * - `spotify:audiobook:{id}`
   * - `spotify:user:{id}`
   * - `spotify:playlist:{id}`
   */
  uris: string;
}

export interface LibrarySaveItemsParams {
  /**
   * A comma-separated list of
   * [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 40
   * URIs.
   *
   * Supported URI types:
   *
   * - `spotify:track:{id}`
   * - `spotify:album:{id}`
   * - `spotify:episode:{id}`
   * - `spotify:show:{id}`
   * - `spotify:audiobook:{id}`
   * - `spotify:user:{id}`
   * - `spotify:playlist:{id}`
   */
  uris: string;
}

export declare namespace Library {
  export {
    type LibraryCheckSavedItemsResponse as LibraryCheckSavedItemsResponse,
    type LibraryCheckSavedItemsParams as LibraryCheckSavedItemsParams,
    type LibraryRemoveItemsParams as LibraryRemoveItemsParams,
    type LibrarySaveItemsParams as LibrarySaveItemsParams,
  };
}
