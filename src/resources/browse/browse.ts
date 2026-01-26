// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryGetPlaylistsParams,
  CategoryGetPlaylistsResponse,
  CategoryListParams,
  CategoryListResponse,
  CategoryRetrieveParams,
  CategoryRetrieveResponse,
} from './categories';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Browse extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);

  /**
   * Get a list of Spotify featured playlists (shown, for example, on a Spotify
   * player's 'Browse' tab).
   *
   * @deprecated
   */
  getFeaturedPlaylists(
    query: BrowseGetFeaturedPlaylistsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrowseGetFeaturedPlaylistsResponse> {
    return this._client.get('/browse/featured-playlists', { query, ...options });
  }

  /**
   * Get a list of new album releases featured in Spotify (shown, for example, on a
   * Spotify player’s “Browse” tab).
   */
  getNewReleases(
    query: BrowseGetNewReleasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrowseGetNewReleasesResponse> {
    return this._client.get('/browse/new-releases', { query, ...options });
  }
}

export interface BrowseGetFeaturedPlaylistsResponse {
  /**
   * The localized message of a playlist.
   */
  message?: string;

  playlists?: BrowseGetFeaturedPlaylistsResponse.Playlists;
}

export namespace BrowseGetFeaturedPlaylistsResponse {
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

export interface BrowseGetNewReleasesResponse {
  albums: BrowseGetNewReleasesResponse.Albums;
}

export namespace BrowseGetNewReleasesResponse {
  export interface Albums {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Albums.Item>;

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

  export namespace Albums {
    export interface Item {
      /**
       * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
       * album.
       */
      id: string;

      /**
       * The type of the album.
       */
      album_type: 'album' | 'single' | 'compilation';

      /**
       * The artists of the album. Each artist object includes a link in `href` to more
       * detailed information about the artist.
       */
      artists: Array<Item.Artist>;

      /**
       * The markets in which the album is available:
       * [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
       * _**NOTE**: an album is considered available in a market when at least 1 of its
       * tracks is available in that market._
       */
      available_markets: Array<string>;

      /**
       * Known external URLs for this album.
       */
      external_urls: Item.ExternalURLs;

      /**
       * A link to the Web API endpoint providing full details of the album.
       */
      href: string;

      /**
       * The cover art for the album in various sizes, widest first.
       */
      images: Array<Item.Image>;

      /**
       * The name of the album. In case of an album takedown, the value may be an empty
       * string.
       */
      name: string;

      /**
       * The date the album was first released.
       */
      release_date: string;

      /**
       * The precision with which `release_date` value is known.
       */
      release_date_precision: 'year' | 'month' | 'day';

      /**
       * The number of tracks in the album.
       */
      total_tracks: number;

      /**
       * The object type.
       */
      type: 'album';

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
       * album.
       */
      uri: string;

      /**
       * Included in the response when a content restriction is applied.
       */
      restrictions?: Item.Restrictions;
    }

    export namespace Item {
      export interface Artist {
        /**
         * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
         * artist.
         */
        id?: string;

        /**
         * Known external URLs for this artist.
         */
        external_urls?: Artist.ExternalURLs;

        /**
         * A link to the Web API endpoint providing full details of the artist.
         */
        href?: string;

        /**
         * The name of the artist.
         */
        name?: string;

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

      export namespace Artist {
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
      }

      /**
       * Known external URLs for this album.
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
       * Included in the response when a content restriction is applied.
       */
      export interface Restrictions {
        /**
         * The reason for the restriction. Albums may be restricted if the content is not
         * available in a given market, to the user's subscription type, or when the user's
         * account is set to not play explicit content. Additional reasons may be added in
         * the future.
         */
        reason?: 'market' | 'product' | 'explicit';
      }
    }
  }
}

export interface BrowseGetFeaturedPlaylistsParams {
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

export interface BrowseGetNewReleasesParams {
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

Browse.Categories = Categories;

export declare namespace Browse {
  export {
    type BrowseGetFeaturedPlaylistsResponse as BrowseGetFeaturedPlaylistsResponse,
    type BrowseGetNewReleasesResponse as BrowseGetNewReleasesResponse,
    type BrowseGetFeaturedPlaylistsParams as BrowseGetFeaturedPlaylistsParams,
    type BrowseGetNewReleasesParams as BrowseGetNewReleasesParams,
  };

  export {
    Categories as Categories,
    type CategoryRetrieveResponse as CategoryRetrieveResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryGetPlaylistsResponse as CategoryGetPlaylistsResponse,
    type CategoryRetrieveParams as CategoryRetrieveParams,
    type CategoryListParams as CategoryListParams,
    type CategoryGetPlaylistsParams as CategoryGetPlaylistsParams,
  };
}
