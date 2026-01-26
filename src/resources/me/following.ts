// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Following extends APIResource {
  /**
   * Get the current user's followed artists.
   *
   * @example
   * ```ts
   * const followings = await client.me.following.list({
   *   type: 'artist',
   * });
   * ```
   */
  list(query: FollowingListParams, options?: RequestOptions): APIPromise<FollowingListResponse> {
    return this._client.get('/me/following', { query, ...options });
  }

  /**
   * Check to see if the current user is following one or more artists or other
   * Spotify users.
   *
   * @example
   * ```ts
   * const response = await client.me.following.check({
   *   ids: '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
   *   type: 'artist',
   * });
   * ```
   */
  check(query: FollowingCheckParams, options?: RequestOptions): APIPromise<FollowingCheckResponse> {
    return this._client.get('/me/following/contains', { query, ...options });
  }

  /**
   * Add the current user as a follower of one or more artists or other Spotify
   * users.
   *
   * @example
   * ```ts
   * await client.me.following.follow({
   *   query_ids:
   *     '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
   *   type: 'artist',
   *   body_ids: ['string'],
   * });
   * ```
   */
  follow(params: FollowingFollowParams, options?: RequestOptions): APIPromise<void> {
    const { query_ids, type, ...body } = params;
    return this._client.put('/me/following', {
      query: { ids: query_ids, type },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove the current user as a follower of one or more artists or other Spotify
   * users.
   *
   * @example
   * ```ts
   * await client.me.following.unfollow({
   *   query_ids:
   *     '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
   *   type: 'artist',
   * });
   * ```
   */
  unfollow(params: FollowingUnfollowParams, options?: RequestOptions): APIPromise<void> {
    const { query_ids, type, ...body } = params;
    return this._client.delete('/me/following', {
      query: { ids: query_ids, type },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FollowingListResponse {
  artists: FollowingListResponse.Artists;
}

export namespace FollowingListResponse {
  export interface Artists {
    /**
     * The cursors used to find the next set of items.
     */
    cursors?: Artists.Cursors;

    /**
     * A link to the Web API endpoint returning the full result of the request.
     */
    href?: string;

    items?: Array<Artists.Item>;

    /**
     * The maximum number of items in the response (as set in the query or by default).
     */
    limit?: number;

    /**
     * URL to the next page of items. ( `null` if none)
     */
    next?: string;

    /**
     * The total number of items available to return.
     */
    total?: number;
  }

  export namespace Artists {
    /**
     * The cursors used to find the next set of items.
     */
    export interface Cursors {
      /**
       * The cursor to use as key to find the next page of items.
       */
      after?: string;

      /**
       * The cursor to use as key to find the previous page of items.
       */
      before?: string;
    }

    export interface Item {
      /**
       * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
       * artist.
       */
      id?: string;

      /**
       * Known external URLs for this artist.
       */
      external_urls?: Item.ExternalURLs;

      /**
       * Information about the followers of the artist.
       */
      followers?: Item.Followers;

      /**
       * A list of the genres the artist is associated with. If not yet classified, the
       * array is empty.
       */
      genres?: Array<string>;

      /**
       * A link to the Web API endpoint providing full details of the artist.
       */
      href?: string;

      /**
       * Images of the artist in various sizes, widest first.
       */
      images?: Array<Item.Image>;

      /**
       * The name of the artist.
       */
      name?: string;

      /**
       * The popularity of the artist. The value will be between 0 and 100, with 100
       * being the most popular. The artist's popularity is calculated from the
       * popularity of all the artist's tracks.
       */
      popularity?: number;

      /**
       * The object type.
       */
      type?: 'artist';

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
       * artist.
       */
      uri?: string;
    }

    export namespace Item {
      /**
       * Known external URLs for this artist.
       */
      export interface ExternalURLs {
        /**
         * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the
         * object.
         */
        spotify?: string;
      }

      /**
       * Information about the followers of the artist.
       */
      export interface Followers {
        /**
         * This will always be set to null, as the Web API does not support it at the
         * moment.
         */
        href?: string | null;

        /**
         * The total number of followers.
         */
        total?: number;
      }

      export interface Image {
        /**
         * The image height in pixels.
         */
        height: number | null;

        /**
         * The source URL of the image.
         */
        url: string;

        /**
         * The image width in pixels.
         */
        width: number | null;
      }
    }
  }
}

export type FollowingCheckResponse = Array<boolean>;

export interface FollowingListParams {
  /**
   * The ID type: currently only `artist` is supported.
   */
  type: 'artist';

  /**
   * The last artist ID retrieved from the previous request.
   */
  after?: string;

  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   */
  limit?: number;
}

export interface FollowingCheckParams {
  /**
   * A comma-separated list of the artist or the user
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For
   * example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50
   * IDs can be sent in one request.
   */
  ids: string;

  /**
   * The ID type: either `artist` or `user`.
   */
  type: 'artist' | 'user';
}

export interface FollowingFollowParams {
  /**
   * Query param: A comma-separated list of the artist or the user
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). A maximum of 50
   * IDs can be sent in one request.
   */
  query_ids: string;

  /**
   * Query param: The ID type.
   */
  type: 'artist' | 'user';

  /**
   * Body param: A JSON array of the artist or user
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50
   * IDs can be sent in one request. _**Note**: if the `ids` parameter is present in
   * the query string, any IDs listed here in the body will be ignored._
   */
  body_ids: Array<string>;

  [k: string]: unknown;
}

export interface FollowingUnfollowParams {
  /**
   * Query param: A comma-separated list of the artist or the user
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be
   * sent in one request.
   */
  query_ids: string;

  /**
   * Query param: The ID type: either `artist` or `user`.
   */
  type: 'artist' | 'user';

  /**
   * Body param: A JSON array of the artist or user
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50
   * IDs can be sent in one request. _**Note**: if the `ids` parameter is present in
   * the query string, any IDs listed here in the body will be ignored._
   */
  body_ids?: Array<string>;

  [k: string]: unknown;
}

export declare namespace Following {
  export {
    type FollowingListResponse as FollowingListResponse,
    type FollowingCheckResponse as FollowingCheckResponse,
    type FollowingListParams as FollowingListParams,
    type FollowingCheckParams as FollowingCheckParams,
    type FollowingFollowParams as FollowingFollowParams,
    type FollowingUnfollowParams as FollowingUnfollowParams,
  };
}
