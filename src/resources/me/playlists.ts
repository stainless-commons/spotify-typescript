// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Playlists extends APIResource {
  /**
   * Get a list of the playlists owned or followed by the current Spotify user.
   *
   * @example
   * ```ts
   * const playlist = await client.me.playlists.retrieve();
   * ```
   */
  retrieve(
    query: PlaylistRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlaylistRetrieveResponse> {
    return this._client.get('/me/playlists', { query, ...options });
  }
}

export interface PlaylistRetrieveResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<PlaylistRetrieveResponse.Item>;

  /**
   * The maximum number of items in the response (as set in the query or by default).
   */
  limit: number;

  /**
   * URL to the next page of items. ( `null` if none)
   */
  next: string | null;

  /**
   * The offset of the items returned (as set in the query or by default)
   */
  offset: number;

  /**
   * URL to the previous page of items. ( `null` if none)
   */
  previous: string | null;

  /**
   * The total number of items available to return.
   */
  total: number;
}

export namespace PlaylistRetrieveResponse {
  export interface Item {
    /**
     * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
     * playlist.
     */
    id?: string;

    /**
     * `true` if the owner allows other users to modify the playlist.
     */
    collaborative?: boolean;

    /**
     * The playlist description. _Only returned for modified, verified playlists,
     * otherwise_ `null`.
     */
    description?: string;

    /**
     * Known external URLs for this playlist.
     */
    external_urls?: Item.ExternalURLs;

    /**
     * A link to the Web API endpoint providing full details of the playlist.
     */
    href?: string;

    /**
     * Images for the playlist. The array may be empty or contain up to three images.
     * The images are returned by size in descending order. See
     * [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**:
     * If returned, the source URL for the image (`url`) is temporary and will expire
     * in less than a day._
     */
    images?: Array<Item.Image>;

    /**
     * The name of the playlist.
     */
    name?: string;

    /**
     * The user who owns the playlist
     */
    owner?: Item.Owner;

    /**
     * The playlist's public/private status (if it is added to the user's profile):
     * `true` the playlist is public, `false` the playlist is private, `null` the
     * playlist status is not relevant. For more about public/private status, see
     * [Working with Playlists](/documentation/web-api/concepts/playlists)
     */
    public?: boolean;

    /**
     * The version identifier for the current playlist. Can be supplied in other
     * requests to target a specific playlist version
     */
    snapshot_id?: string;

    /**
     * A collection containing a link ( `href` ) to the Web API endpoint where full
     * details of the playlist's tracks can be retrieved, along with the `total` number
     * of tracks in the playlist. Note, a track object may be `null`. This can happen
     * if a track is no longer available.
     */
    tracks?: Item.Tracks;

    /**
     * The object type: "playlist"
     */
    type?: string;

    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
     * playlist.
     */
    uri?: string;
  }

  export namespace Item {
    /**
     * Known external URLs for this playlist.
     */
    export interface ExternalURLs {
      /**
       * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the
       * object.
       */
      spotify?: string;
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

    /**
     * The user who owns the playlist
     */
    export interface Owner {
      /**
       * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this
       * user.
       */
      id?: string;

      /**
       * The name displayed on the user's profile. `null` if not available.
       */
      display_name?: string | null;

      /**
       * Known public external URLs for this user.
       */
      external_urls?: Owner.ExternalURLs;

      /**
       * A link to the Web API endpoint for this user.
       */
      href?: string;

      /**
       * The object type.
       */
      type?: 'user';

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this
       * user.
       */
      uri?: string;
    }

    export namespace Owner {
      /**
       * Known public external URLs for this user.
       */
      export interface ExternalURLs {
        /**
         * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the
         * object.
         */
        spotify?: string;
      }
    }

    /**
     * A collection containing a link ( `href` ) to the Web API endpoint where full
     * details of the playlist's tracks can be retrieved, along with the `total` number
     * of tracks in the playlist. Note, a track object may be `null`. This can happen
     * if a track is no longer available.
     */
    export interface Tracks {
      /**
       * A link to the Web API endpoint where full details of the playlist's tracks can
       * be retrieved.
       */
      href?: string;

      /**
       * Number of tracks in the playlist.
       */
      total?: number;
    }
  }
}

export interface PlaylistRetrieveParams {
  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   */
  limit?: number;

  /**
   * 'The index of the first playlist to return. Default: 0 (the first object).
   * Maximum offset: 100.000\. Use with `limit` to get the next set of playlists.'
   */
  offset?: number;
}

export declare namespace Playlists {
  export {
    type PlaylistRetrieveResponse as PlaylistRetrieveResponse,
    type PlaylistRetrieveParams as PlaylistRetrieveParams,
  };
}
