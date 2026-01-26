// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Tracks extends APIResource {
  /**
   * Get a list of the songs saved in the current Spotify user's 'Your Music'
   * library.
   *
   * @example
   * ```ts
   * const tracks = await client.me.tracks.list();
   * ```
   */
  list(
    query: TrackListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrackListResponse> {
    return this._client.get('/me/tracks', { query, ...options });
  }

  /**
   * Check if one or more tracks is already saved in the current Spotify user's 'Your
   * Music' library.
   *
   * @example
   * ```ts
   * const response = await client.me.tracks.check({
   *   ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
   * });
   * ```
   */
  check(query: TrackCheckParams, options?: RequestOptions): APIPromise<TrackCheckResponse> {
    return this._client.get('/me/tracks/contains', { query, ...options });
  }

  /**
   * Remove one or more tracks from the current user's 'Your Music' library.
   *
   * @example
   * ```ts
   * await client.me.tracks.remove({
   *   query_ids:
   *     '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
   * });
   * ```
   */
  remove(params: TrackRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { query_ids, ...body } = params;
    return this._client.delete('/me/tracks', {
      query: { ids: query_ids },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Save one or more tracks to the current user's 'Your Music' library.
   *
   * @example
   * ```ts
   * await client.me.tracks.save({ ids: ['string'] });
   * ```
   */
  save(body: TrackSaveParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/me/tracks', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TrackListResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<TrackListResponse.Item>;

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

export namespace TrackListResponse {
  export interface Item {
    /**
     * The date and time the track was saved. Timestamps are returned in ISO 8601
     * format as Coordinated Universal Time (UTC) with a zero offset:
     * YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for example, the date/time of an
     * album release), an additional field indicates the precision; see for example,
     * release_date in an album object.
     */
    added_at?: string;

    /**
     * Information about the track.
     */
    track?: Item.Track;
  }

  export namespace Item {
    /**
     * Information about the track.
     */
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
}

export type TrackCheckResponse = Array<boolean>;

export interface TrackListParams {
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

export interface TrackCheckParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.
   */
  ids: string;
}

export interface TrackRemoveParams {
  /**
   * Query param: A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.
   */
  query_ids: string;

  /**
   * Body param: A JSON array of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items
   * can be specified in one request. _**Note**: if the `ids` parameter is present in
   * the query string, any IDs listed here in the body will be ignored._
   */
  body_ids?: Array<string>;

  [k: string]: unknown;
}

export interface TrackSaveParams {
  /**
   * A JSON array of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items
   * can be specified in one request. _**Note**: if the `timestamped_ids` is present
   * in the body, any IDs listed in the query parameters (deprecated) or the `ids`
   * field in the body will be ignored._
   */
  ids: Array<string>;

  /**
   * A JSON array of objects containing track IDs with their corresponding
   * timestamps. Each object must include a track ID and an `added_at` timestamp.
   * This allows you to specify when tracks were added to maintain a specific
   * chronological order in the user's library.<br/>A maximum of 50 items can be
   * specified in one request. _**Note**: if the `timestamped_ids` is present in the
   * body, any IDs listed in the query parameters (deprecated) or the `ids` field in
   * the body will be ignored._
   */
  timestamped_ids?: Array<TrackSaveParams.TimestampedID>;

  [k: string]: unknown;
}

export namespace TrackSaveParams {
  export interface TimestampedID {
    /**
     * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
     * track.
     */
    id: string;

    /**
     * The timestamp when the track was added to the library. Use ISO 8601 format with
     * UTC timezone (e.g., `2023-01-15T14:30:00Z`). You can specify past timestamps to
     * insert tracks at specific positions in the library's chronological order. The
     * API uses minute-level granularity for ordering, though the timestamp supports
     * millisecond precision.
     */
    added_at: string;
  }
}

export declare namespace Tracks {
  export {
    type TrackListResponse as TrackListResponse,
    type TrackCheckResponse as TrackCheckResponse,
    type TrackListParams as TrackListParams,
    type TrackCheckParams as TrackCheckParams,
    type TrackRemoveParams as TrackRemoveParams,
    type TrackSaveParams as TrackSaveParams,
  };
}
