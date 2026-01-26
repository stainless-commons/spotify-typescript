// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Get a single category used to tag items in Spotify (on, for example, the Spotify
   * player’s “Browse” tab).
   */
  retrieve(
    categoryID: string,
    query: CategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryRetrieveResponse> {
    return this._client.get(path`/browse/categories/${categoryID}`, { query, ...options });
  }

  /**
   * Get a list of categories used to tag items in Spotify (on, for example, the
   * Spotify player’s “Browse” tab).
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    return this._client.get('/browse/categories', { query, ...options });
  }

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   *
   * @deprecated
   */
  getPlaylists(
    categoryID: string,
    query: CategoryGetPlaylistsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryGetPlaylistsResponse> {
    return this._client.get(path`/browse/categories/${categoryID}/playlists`, { query, ...options });
  }
}

export interface CategoryRetrieveResponse {
  /**
   * The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of
   * the category.
   */
  id: string;

  /**
   * A link to the Web API endpoint returning full details of the category.
   */
  href: string;

  /**
   * The category icon, in various sizes.
   */
  icons: Array<CategoryRetrieveResponse.Icon>;

  /**
   * The name of the category.
   */
  name: string;
}

export namespace CategoryRetrieveResponse {
  export interface Icon {
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

export interface CategoryListResponse {
  categories: CategoryListResponse.Categories;
}

export namespace CategoryListResponse {
  export interface Categories {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Categories.Item>;

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

  export namespace Categories {
    export interface Item {
      /**
       * The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of
       * the category.
       */
      id: string;

      /**
       * A link to the Web API endpoint returning full details of the category.
       */
      href: string;

      /**
       * The category icon, in various sizes.
       */
      icons: Array<Item.Icon>;

      /**
       * The name of the category.
       */
      name: string;
    }

    export namespace Item {
      export interface Icon {
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

export interface CategoryGetPlaylistsResponse {
  /**
   * The localized message of a playlist.
   */
  message?: string;

  playlists?: CategoryGetPlaylistsResponse.Playlists;
}

export namespace CategoryGetPlaylistsResponse {
  export interface Playlists {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Playlists.Item>;

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

  export namespace Playlists {
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
}

export interface CategoryRetrieveParams {
  /**
   * The desired language, consisting of an
   * [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an
   * [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2),
   * joined by an underscore. For example: `es_MX`, meaning &quot;Spanish
   * (Mexico)&quot;. Provide this parameter if you want the category strings returned
   * in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the
   * specified language is not available, the category strings returned will be in
   * the Spotify default language (American English)._
   */
  locale?: string;
}

export interface CategoryListParams {
  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   */
  limit?: number;

  /**
   * The desired language, consisting of an
   * [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an
   * [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2),
   * joined by an underscore. For example: `es_MX`, meaning &quot;Spanish
   * (Mexico)&quot;. Provide this parameter if you want the category strings returned
   * in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the
   * specified language is not available, the category strings returned will be in
   * the Spotify default language (American English)._
   */
  locale?: string;

  /**
   * The index of the first item to return. Default: 0 (the first item). Use with
   * limit to get the next set of items.
   */
  offset?: number;
}

export interface CategoryGetPlaylistsParams {
  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   */
  limit?: number;

  /**
   * The index of the first item to return. Default: 0 (the first item). Use with
   * limit to get the next set of items.
   */
  offset?: number;
}

export declare namespace Categories {
  export {
    type CategoryRetrieveResponse as CategoryRetrieveResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryGetPlaylistsResponse as CategoryGetPlaylistsResponse,
    type CategoryRetrieveParams as CategoryRetrieveParams,
    type CategoryListParams as CategoryListParams,
    type CategoryGetPlaylistsParams as CategoryGetPlaylistsParams,
  };
}
