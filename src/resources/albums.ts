// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Albums extends APIResource {
  /**
   * Get Spotify catalog information for a single album.
   */
  retrieve(
    id: string,
    query: AlbumRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlbumRetrieveResponse> {
    return this._client.get(path`/albums/${id}`, { query, ...options });
  }

  /**
   * Get Spotify catalog information for multiple albums identified by their Spotify
   * IDs.
   */
  list(query: AlbumListParams, options?: RequestOptions): APIPromise<AlbumListResponse> {
    return this._client.get('/albums', { query, ...options });
  }

  /**
   * Get Spotify catalog information about an album’s tracks. Optional parameters can
   * be used to limit the number of tracks returned.
   */
  getTracks(
    id: string,
    query: AlbumGetTracksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlbumGetTracksResponse> {
    return this._client.get(path`/albums/${id}/tracks`, { query, ...options });
  }
}

export interface AlbumRetrieveResponse {
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
   * The markets in which the album is available:
   * [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * _**NOTE**: an album is considered available in a market when at least 1 of its
   * tracks is available in that market._
   */
  available_markets: Array<string>;

  /**
   * Known external URLs for this album.
   */
  external_urls: AlbumRetrieveResponse.ExternalURLs;

  /**
   * A link to the Web API endpoint providing full details of the album.
   */
  href: string;

  /**
   * The cover art for the album in various sizes, widest first.
   */
  images: Array<AlbumRetrieveResponse.Image>;

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
   * The artists of the album. Each artist object includes a link in `href` to more
   * detailed information about the artist.
   */
  artists?: Array<AlbumRetrieveResponse.Artist>;

  /**
   * The copyright statements of the album.
   */
  copyrights?: Array<AlbumRetrieveResponse.Copyright>;

  /**
   * Known external IDs for the album.
   */
  external_ids?: AlbumRetrieveResponse.ExternalIDs;

  /**
   * @deprecated **Deprecated** The array is always empty.
   */
  genres?: Array<string>;

  /**
   * The label associated with the album.
   */
  label?: string;

  /**
   * The popularity of the album. The value will be between 0 and 100, with 100 being
   * the most popular.
   */
  popularity?: number;

  /**
   * Included in the response when a content restriction is applied.
   */
  restrictions?: AlbumRetrieveResponse.Restrictions;

  /**
   * The tracks of the album.
   */
  tracks?: AlbumRetrieveResponse.Tracks;
}

export namespace AlbumRetrieveResponse {
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

  export interface Copyright {
    /**
     * The copyright text for this content.
     */
    text?: string;

    /**
     * The type of copyright: `C` = the copyright, `P` = the sound recording
     * (performance) copyright.
     */
    type?: string;
  }

  /**
   * Known external IDs for the album.
   */
  export interface ExternalIDs {
    /**
     * [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)
     */
    ean?: string;

    /**
     * [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)
     */
    isrc?: string;

    /**
     * [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)
     */
    upc?: string;
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

  /**
   * The tracks of the album.
   */
  export interface Tracks {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Tracks.Item>;

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

  export namespace Tracks {
    export interface Item {
      /**
       * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
       * track.
       */
      id?: string;

      /**
       * The artists who performed the track. Each artist object includes a link in
       * `href` to more detailed information about the artist.
       */
      artists?: Array<Item.Artist>;

      /**
       * A list of the countries in which the track can be played, identified by their
       * [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
       */
      available_markets?: Array<string>;

      /**
       * The disc number (usually `1` unless the album consists of more than one disc).
       */
      disc_number?: number;

      /**
       * The track length in milliseconds.
       */
      duration_ms?: number;

      /**
       * Whether or not the track has explicit lyrics ( `true` = yes it does; `false` =
       * no it does not OR unknown).
       */
      explicit?: boolean;

      /**
       * External URLs for this track.
       */
      external_urls?: Item.ExternalURLs;

      /**
       * A link to the Web API endpoint providing full details of the track.
       */
      href?: string;

      /**
       * Whether or not the track is from a local file.
       */
      is_local?: boolean;

      /**
       * Part of the response when
       * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied.
       * If `true`, the track is playable in the given market. Otherwise `false`.
       */
      is_playable?: boolean;

      /**
       * Part of the response when
       * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied
       * and is only part of the response if the track linking, in fact, exists. The
       * requested track has been replaced with a different track. The track in the
       * `linked_from` object contains information about the originally requested track.
       */
      linked_from?: Item.LinkedFrom;

      /**
       * The name of the track.
       */
      name?: string;

      /**
       * @deprecated A URL to a 30 second preview (MP3 format) of the track.
       */
      preview_url?: string | null;

      /**
       * Included in the response when a content restriction is applied.
       */
      restrictions?: Item.Restrictions;

      /**
       * The number of the track. If an album has several discs, the track number is the
       * number on the specified disc.
       */
      track_number?: number;

      /**
       * The object type: "track".
       */
      type?: string;

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
       * track.
       */
      uri?: string;
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
       * External URLs for this track.
       */
      export interface ExternalURLs {
        /**
         * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the
         * object.
         */
        spotify?: string;
      }

      /**
       * Part of the response when
       * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied
       * and is only part of the response if the track linking, in fact, exists. The
       * requested track has been replaced with a different track. The track in the
       * `linked_from` object contains information about the originally requested track.
       */
      export interface LinkedFrom {
        /**
         * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
         * track.
         */
        id?: string;

        /**
         * Known external URLs for this track.
         */
        external_urls?: LinkedFrom.ExternalURLs;

        /**
         * A link to the Web API endpoint providing full details of the track.
         */
        href?: string;

        /**
         * The object type: "track".
         */
        type?: string;

        /**
         * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
         * track.
         */
        uri?: string;
      }

      export namespace LinkedFrom {
        /**
         * Known external URLs for this track.
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
       * Included in the response when a content restriction is applied.
       */
      export interface Restrictions {
        /**
         * The reason for the restriction. Supported values:
         *
         * - `market` - The content item is not available in the given market.
         * - `product` - The content item is not available for the user's subscription
         *   type.
         * - `explicit` - The content item is explicit and the user's account is set to not
         *   play explicit content.
         *
         * Additional reasons may be added in the future. **Note**: If you use this field,
         * make sure that your application safely handles unknown values.
         */
        reason?: string;
      }
    }
  }
}

export interface AlbumListResponse {
  albums: Array<AlbumListResponse.Album>;
}

export namespace AlbumListResponse {
  export interface Album {
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
     * The markets in which the album is available:
     * [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * _**NOTE**: an album is considered available in a market when at least 1 of its
     * tracks is available in that market._
     */
    available_markets: Array<string>;

    /**
     * Known external URLs for this album.
     */
    external_urls: Album.ExternalURLs;

    /**
     * A link to the Web API endpoint providing full details of the album.
     */
    href: string;

    /**
     * The cover art for the album in various sizes, widest first.
     */
    images: Array<Album.Image>;

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
     * The artists of the album. Each artist object includes a link in `href` to more
     * detailed information about the artist.
     */
    artists?: Array<Album.Artist>;

    /**
     * The copyright statements of the album.
     */
    copyrights?: Array<Album.Copyright>;

    /**
     * Known external IDs for the album.
     */
    external_ids?: Album.ExternalIDs;

    /**
     * @deprecated **Deprecated** The array is always empty.
     */
    genres?: Array<string>;

    /**
     * The label associated with the album.
     */
    label?: string;

    /**
     * The popularity of the album. The value will be between 0 and 100, with 100 being
     * the most popular.
     */
    popularity?: number;

    /**
     * Included in the response when a content restriction is applied.
     */
    restrictions?: Album.Restrictions;

    /**
     * The tracks of the album.
     */
    tracks?: Album.Tracks;
  }

  export namespace Album {
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

    export interface Copyright {
      /**
       * The copyright text for this content.
       */
      text?: string;

      /**
       * The type of copyright: `C` = the copyright, `P` = the sound recording
       * (performance) copyright.
       */
      type?: string;
    }

    /**
     * Known external IDs for the album.
     */
    export interface ExternalIDs {
      /**
       * [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)
       */
      ean?: string;

      /**
       * [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)
       */
      isrc?: string;

      /**
       * [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)
       */
      upc?: string;
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

    /**
     * The tracks of the album.
     */
    export interface Tracks {
      /**
       * A link to the Web API endpoint returning the full result of the request
       */
      href: string;

      items: Array<Tracks.Item>;

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

    export namespace Tracks {
      export interface Item {
        /**
         * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
         * track.
         */
        id?: string;

        /**
         * The artists who performed the track. Each artist object includes a link in
         * `href` to more detailed information about the artist.
         */
        artists?: Array<Item.Artist>;

        /**
         * A list of the countries in which the track can be played, identified by their
         * [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
         */
        available_markets?: Array<string>;

        /**
         * The disc number (usually `1` unless the album consists of more than one disc).
         */
        disc_number?: number;

        /**
         * The track length in milliseconds.
         */
        duration_ms?: number;

        /**
         * Whether or not the track has explicit lyrics ( `true` = yes it does; `false` =
         * no it does not OR unknown).
         */
        explicit?: boolean;

        /**
         * External URLs for this track.
         */
        external_urls?: Item.ExternalURLs;

        /**
         * A link to the Web API endpoint providing full details of the track.
         */
        href?: string;

        /**
         * Whether or not the track is from a local file.
         */
        is_local?: boolean;

        /**
         * Part of the response when
         * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied.
         * If `true`, the track is playable in the given market. Otherwise `false`.
         */
        is_playable?: boolean;

        /**
         * Part of the response when
         * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied
         * and is only part of the response if the track linking, in fact, exists. The
         * requested track has been replaced with a different track. The track in the
         * `linked_from` object contains information about the originally requested track.
         */
        linked_from?: Item.LinkedFrom;

        /**
         * The name of the track.
         */
        name?: string;

        /**
         * @deprecated A URL to a 30 second preview (MP3 format) of the track.
         */
        preview_url?: string | null;

        /**
         * Included in the response when a content restriction is applied.
         */
        restrictions?: Item.Restrictions;

        /**
         * The number of the track. If an album has several discs, the track number is the
         * number on the specified disc.
         */
        track_number?: number;

        /**
         * The object type: "track".
         */
        type?: string;

        /**
         * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
         * track.
         */
        uri?: string;
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
         * External URLs for this track.
         */
        export interface ExternalURLs {
          /**
           * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the
           * object.
           */
          spotify?: string;
        }

        /**
         * Part of the response when
         * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied
         * and is only part of the response if the track linking, in fact, exists. The
         * requested track has been replaced with a different track. The track in the
         * `linked_from` object contains information about the originally requested track.
         */
        export interface LinkedFrom {
          /**
           * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
           * track.
           */
          id?: string;

          /**
           * Known external URLs for this track.
           */
          external_urls?: LinkedFrom.ExternalURLs;

          /**
           * A link to the Web API endpoint providing full details of the track.
           */
          href?: string;

          /**
           * The object type: "track".
           */
          type?: string;

          /**
           * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
           * track.
           */
          uri?: string;
        }

        export namespace LinkedFrom {
          /**
           * Known external URLs for this track.
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
         * Included in the response when a content restriction is applied.
         */
        export interface Restrictions {
          /**
           * The reason for the restriction. Supported values:
           *
           * - `market` - The content item is not available in the given market.
           * - `product` - The content item is not available for the user's subscription
           *   type.
           * - `explicit` - The content item is explicit and the user's account is set to not
           *   play explicit content.
           *
           * Additional reasons may be added in the future. **Note**: If you use this field,
           * make sure that your application safely handles unknown values.
           */
          reason?: string;
        }
      }
    }
  }
}

export interface AlbumGetTracksResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<AlbumGetTracksResponse.Item>;

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

export namespace AlbumGetTracksResponse {
  export interface Item {
    /**
     * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
     * track.
     */
    id?: string;

    /**
     * The artists who performed the track. Each artist object includes a link in
     * `href` to more detailed information about the artist.
     */
    artists?: Array<Item.Artist>;

    /**
     * A list of the countries in which the track can be played, identified by their
     * [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
     */
    available_markets?: Array<string>;

    /**
     * The disc number (usually `1` unless the album consists of more than one disc).
     */
    disc_number?: number;

    /**
     * The track length in milliseconds.
     */
    duration_ms?: number;

    /**
     * Whether or not the track has explicit lyrics ( `true` = yes it does; `false` =
     * no it does not OR unknown).
     */
    explicit?: boolean;

    /**
     * External URLs for this track.
     */
    external_urls?: Item.ExternalURLs;

    /**
     * A link to the Web API endpoint providing full details of the track.
     */
    href?: string;

    /**
     * Whether or not the track is from a local file.
     */
    is_local?: boolean;

    /**
     * Part of the response when
     * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied.
     * If `true`, the track is playable in the given market. Otherwise `false`.
     */
    is_playable?: boolean;

    /**
     * Part of the response when
     * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied
     * and is only part of the response if the track linking, in fact, exists. The
     * requested track has been replaced with a different track. The track in the
     * `linked_from` object contains information about the originally requested track.
     */
    linked_from?: Item.LinkedFrom;

    /**
     * The name of the track.
     */
    name?: string;

    /**
     * @deprecated A URL to a 30 second preview (MP3 format) of the track.
     */
    preview_url?: string | null;

    /**
     * Included in the response when a content restriction is applied.
     */
    restrictions?: Item.Restrictions;

    /**
     * The number of the track. If an album has several discs, the track number is the
     * number on the specified disc.
     */
    track_number?: number;

    /**
     * The object type: "track".
     */
    type?: string;

    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
     * track.
     */
    uri?: string;
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
     * External URLs for this track.
     */
    export interface ExternalURLs {
      /**
       * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the
       * object.
       */
      spotify?: string;
    }

    /**
     * Part of the response when
     * [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied
     * and is only part of the response if the track linking, in fact, exists. The
     * requested track has been replaced with a different track. The track in the
     * `linked_from` object contains information about the originally requested track.
     */
    export interface LinkedFrom {
      /**
       * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
       * track.
       */
      id?: string;

      /**
       * Known external URLs for this track.
       */
      external_urls?: LinkedFrom.ExternalURLs;

      /**
       * A link to the Web API endpoint providing full details of the track.
       */
      href?: string;

      /**
       * The object type: "track".
       */
      type?: string;

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
       * track.
       */
      uri?: string;
    }

    export namespace LinkedFrom {
      /**
       * Known external URLs for this track.
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
     * Included in the response when a content restriction is applied.
     */
    export interface Restrictions {
      /**
       * The reason for the restriction. Supported values:
       *
       * - `market` - The content item is not available in the given market.
       * - `product` - The content item is not available for the user's subscription
       *   type.
       * - `explicit` - The content item is explicit and the user's account is set to not
       *   play explicit content.
       *
       * Additional reasons may be added in the future. **Note**: If you use this field,
       * make sure that your application safely handles unknown values.
       */
      reason?: string;
    }
  }
}

export interface AlbumRetrieveParams {
  /**
   * An
   * [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * If a country code is specified, only content that is available in that market
   * will be returned.<br/> If a valid user access token is specified in the request
   * header, the country associated with the user account will take priority over
   * this parameter.<br/> _**Note**: If neither market or user country are provided,
   * the content is considered unavailable for the client._<br/> Users can view the
   * country that is associated with their account in the
   * [account settings](https://www.spotify.com/account/overview/).
   */
  market?: string;
}

export interface AlbumListParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums.
   * Maximum: 20 IDs.
   */
  ids: string;

  /**
   * An
   * [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * If a country code is specified, only content that is available in that market
   * will be returned.<br/> If a valid user access token is specified in the request
   * header, the country associated with the user account will take priority over
   * this parameter.<br/> _**Note**: If neither market or user country are provided,
   * the content is considered unavailable for the client._<br/> Users can view the
   * country that is associated with their account in the
   * [account settings](https://www.spotify.com/account/overview/).
   */
  market?: string;
}

export interface AlbumGetTracksParams {
  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   */
  limit?: number;

  /**
   * An
   * [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * If a country code is specified, only content that is available in that market
   * will be returned.<br/> If a valid user access token is specified in the request
   * header, the country associated with the user account will take priority over
   * this parameter.<br/> _**Note**: If neither market or user country are provided,
   * the content is considered unavailable for the client._<br/> Users can view the
   * country that is associated with their account in the
   * [account settings](https://www.spotify.com/account/overview/).
   */
  market?: string;

  /**
   * The index of the first item to return. Default: 0 (the first item). Use with
   * limit to get the next set of items.
   */
  offset?: number;
}

export declare namespace Albums {
  export {
    type AlbumRetrieveResponse as AlbumRetrieveResponse,
    type AlbumListResponse as AlbumListResponse,
    type AlbumGetTracksResponse as AlbumGetTracksResponse,
    type AlbumRetrieveParams as AlbumRetrieveParams,
    type AlbumListParams as AlbumListParams,
    type AlbumGetTracksParams as AlbumGetTracksParams,
  };
}
