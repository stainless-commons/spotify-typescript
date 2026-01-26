// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tracks extends APIResource {
  /**
   * Get Spotify catalog information for a single track identified by its unique
   * Spotify ID.
   */
  retrieve(
    id: string,
    query: TrackRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrackRetrieveResponse> {
    return this._client.get(path`/tracks/${id}`, { query, ...options });
  }

  /**
   * Get Spotify catalog information for multiple tracks based on their Spotify IDs.
   */
  list(query: TrackListParams, options?: RequestOptions): APIPromise<TrackListResponse> {
    return this._client.get('/tracks', { query, ...options });
  }
}

export interface TrackRetrieveResponse {
  /**
   * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
   * track.
   */
  id?: string;

  /**
   * The album on which the track appears. The album object includes a link in `href`
   * to full information about the album.
   */
  album?: TrackRetrieveResponse.Album;

  /**
   * The artists who performed the track. Each artist object includes a link in
   * `href` to more detailed information about the artist.
   */
  artists?: Array<TrackRetrieveResponse.Artist>;

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
   * Known external IDs for the track.
   */
  external_ids?: TrackRetrieveResponse.ExternalIDs;

  /**
   * Known external URLs for this track.
   */
  external_urls?: TrackRetrieveResponse.ExternalURLs;

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
   * [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied.
   * If `true`, the track is playable in the given market. Otherwise `false`.
   */
  is_playable?: boolean;

  /**
   * Part of the response when
   * [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied,
   * and the requested track has been replaced with different track. The track in the
   * `linked_from` object contains information about the originally requested track.
   */
  linked_from?: TrackRetrieveResponse.LinkedFrom;

  /**
   * The name of the track.
   */
  name?: string;

  /**
   * The popularity of the track. The value will be between 0 and 100, with 100 being
   * the most popular.<br/>The popularity of a track is a value between 0 and 100,
   * with 100 being the most popular. The popularity is calculated by algorithm and
   * is based, in the most part, on the total number of plays the track has had and
   * how recent those plays are.<br/>Generally speaking, songs that are being played
   * a lot now will have a higher popularity than songs that were played a lot in the
   * past. Duplicate tracks (e.g. the same track from a single and an album) are
   * rated independently. Artist and album popularity is derived mathematically from
   * track popularity. _**Note**: the popularity value may lag actual popularity by a
   * few days: the value is not updated in real time._
   */
  popularity?: number;

  /**
   * @deprecated A link to a 30 second preview (MP3 format) of the track. Can be
   * `null`
   */
  preview_url?: string | null;

  /**
   * Included in the response when a content restriction is applied.
   */
  restrictions?: TrackRetrieveResponse.Restrictions;

  /**
   * The number of the track. If an album has several discs, the track number is the
   * number on the specified disc.
   */
  track_number?: number;

  /**
   * The object type: "track".
   */
  type?: 'track';

  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
   * track.
   */
  uri?: string;
}

export namespace TrackRetrieveResponse {
  /**
   * The album on which the track appears. The album object includes a link in `href`
   * to full information about the album.
   */
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
     * The artists of the album. Each artist object includes a link in `href` to more
     * detailed information about the artist.
     */
    artists: Array<Album.Artist>;

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
     * Included in the response when a content restriction is applied.
     */
    restrictions?: Album.Restrictions;
  }

  export namespace Album {
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
   * Known external IDs for the track.
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
   * Known external URLs for this track.
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
   * [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied,
   * and the requested track has been replaced with different track. The track in the
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

export interface TrackListResponse {
  tracks: Array<TrackListResponse.Track>;
}

export namespace TrackListResponse {
  export interface Track {
    /**
     * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
     * track.
     */
    id?: string;

    /**
     * The album on which the track appears. The album object includes a link in `href`
     * to full information about the album.
     */
    album?: Track.Album;

    /**
     * The artists who performed the track. Each artist object includes a link in
     * `href` to more detailed information about the artist.
     */
    artists?: Array<Track.Artist>;

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
     * Known external IDs for the track.
     */
    external_ids?: Track.ExternalIDs;

    /**
     * Known external URLs for this track.
     */
    external_urls?: Track.ExternalURLs;

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
     * [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied.
     * If `true`, the track is playable in the given market. Otherwise `false`.
     */
    is_playable?: boolean;

    /**
     * Part of the response when
     * [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied,
     * and the requested track has been replaced with different track. The track in the
     * `linked_from` object contains information about the originally requested track.
     */
    linked_from?: Track.LinkedFrom;

    /**
     * The name of the track.
     */
    name?: string;

    /**
     * The popularity of the track. The value will be between 0 and 100, with 100 being
     * the most popular.<br/>The popularity of a track is a value between 0 and 100,
     * with 100 being the most popular. The popularity is calculated by algorithm and
     * is based, in the most part, on the total number of plays the track has had and
     * how recent those plays are.<br/>Generally speaking, songs that are being played
     * a lot now will have a higher popularity than songs that were played a lot in the
     * past. Duplicate tracks (e.g. the same track from a single and an album) are
     * rated independently. Artist and album popularity is derived mathematically from
     * track popularity. _**Note**: the popularity value may lag actual popularity by a
     * few days: the value is not updated in real time._
     */
    popularity?: number;

    /**
     * @deprecated A link to a 30 second preview (MP3 format) of the track. Can be
     * `null`
     */
    preview_url?: string | null;

    /**
     * Included in the response when a content restriction is applied.
     */
    restrictions?: Track.Restrictions;

    /**
     * The number of the track. If an album has several discs, the track number is the
     * number on the specified disc.
     */
    track_number?: number;

    /**
     * The object type: "track".
     */
    type?: 'track';

    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
     * track.
     */
    uri?: string;
  }

  export namespace Track {
    /**
     * The album on which the track appears. The album object includes a link in `href`
     * to full information about the album.
     */
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
       * The artists of the album. Each artist object includes a link in `href` to more
       * detailed information about the artist.
       */
      artists: Array<Album.Artist>;

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
       * Included in the response when a content restriction is applied.
       */
      restrictions?: Album.Restrictions;
    }

    export namespace Album {
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
     * Known external IDs for the track.
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
     * Known external URLs for this track.
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
     * [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied,
     * and the requested track has been replaced with different track. The track in the
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

export interface TrackRetrieveParams {
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

export interface TrackListParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.
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

export declare namespace Tracks {
  export {
    type TrackRetrieveResponse as TrackRetrieveResponse,
    type TrackListResponse as TrackListResponse,
    type TrackRetrieveParams as TrackRetrieveParams,
    type TrackListParams as TrackListParams,
  };
}
