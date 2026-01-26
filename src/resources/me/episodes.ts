// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Episodes extends APIResource {
  /**
   * Get a list of the episodes saved in the current Spotify user's library.<br/>
   * This API endpoint is in **beta** and could change without warning. Please share
   * any feedback that you have, or issues that you discover, in our
   * [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @example
   * ```ts
   * const episodes = await client.me.episodes.list();
   * ```
   */
  list(
    query: EpisodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EpisodeListResponse> {
    return this._client.get('/me/episodes', { query, ...options });
  }

  /**
   * Check if one or more episodes is already saved in the current Spotify user's
   * 'Your Episodes' library.<br/> This API endpoint is in **beta** and could change
   * without warning. Please share any feedback that you have, or issues that you
   * discover, in our
   * [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
   *
   * @example
   * ```ts
   * const response = await client.me.episodes.check({
   *   ids: '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf',
   * });
   * ```
   */
  check(query: EpisodeCheckParams, options?: RequestOptions): APIPromise<EpisodeCheckResponse> {
    return this._client.get('/me/episodes/contains', { query, ...options });
  }

  /**
   * Remove one or more episodes from the current user's library.<br/> This API
   * endpoint is in **beta** and could change without warning. Please share any
   * feedback that you have, or issues that you discover, in our
   * [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @example
   * ```ts
   * await client.me.episodes.remove({
   *   query_ids:
   *     '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
   * });
   * ```
   */
  remove(params: EpisodeRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { query_ids, ...body } = params;
    return this._client.delete('/me/episodes', {
      query: { ids: query_ids },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Save one or more episodes to the current user's library.<br/> This API endpoint
   * is in **beta** and could change without warning. Please share any feedback that
   * you have, or issues that you discover, in our
   * [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
   *
   * @example
   * ```ts
   * await client.me.episodes.save({
   *   query_ids:
   *     '77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf',
   *   body_ids: ['string'],
   * });
   * ```
   */
  save(params: EpisodeSaveParams, options?: RequestOptions): APIPromise<void> {
    const { query_ids, ...body } = params;
    return this._client.put('/me/episodes', {
      query: { ids: query_ids },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EpisodeListResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<EpisodeListResponse.Item>;

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

export namespace EpisodeListResponse {
  export interface Item {
    /**
     * The date and time the episode was saved. Timestamps are returned in ISO 8601
     * format as Coordinated Universal Time (UTC) with a zero offset:
     * YYYY-MM-DDTHH:MM:SSZ.
     */
    added_at?: string;

    /**
     * Information about the episode.
     */
    episode?: Item.Episode;
  }

  export namespace Item {
    /**
     * Information about the episode.
     */
    export interface Episode {
      /**
       * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
       * episode.
       */
      id: string;

      /**
       * @deprecated A URL to a 30 second preview (MP3 format) of the episode. `null` if
       * not available.
       */
      audio_preview_url: string | null;

      /**
       * A description of the episode. HTML tags are stripped away from this field, use
       * `html_description` field in case HTML tags are needed.
       */
      description: string;

      /**
       * The episode length in milliseconds.
       */
      duration_ms: number;

      /**
       * Whether or not the episode has explicit content (true = yes it does; false = no
       * it does not OR unknown).
       */
      explicit: boolean;

      /**
       * External URLs for this episode.
       */
      external_urls: Episode.ExternalURLs;

      /**
       * A link to the Web API endpoint providing full details of the episode.
       */
      href: string;

      /**
       * A description of the episode. This field may contain HTML tags.
       */
      html_description: string;

      /**
       * The cover art for the episode in various sizes, widest first.
       */
      images: Array<Episode.Image>;

      /**
       * True if the episode is hosted outside of Spotify's CDN.
       */
      is_externally_hosted: boolean;

      /**
       * True if the episode is playable in the given market. Otherwise false.
       */
      is_playable: boolean;

      /**
       * A list of the languages used in the episode, identified by their
       * [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
       */
      languages: Array<string>;

      /**
       * The name of the episode.
       */
      name: string;

      /**
       * The date the episode was first released, for example `"1981-12-15"`. Depending
       * on the precision, it might be shown as `"1981"` or `"1981-12"`.
       */
      release_date: string;

      /**
       * The precision with which `release_date` value is known.
       */
      release_date_precision: 'year' | 'month' | 'day';

      /**
       * The show on which the episode belongs.
       */
      show: Episode.Show;

      /**
       * The object type.
       */
      type: 'episode';

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
       * episode.
       */
      uri: string;

      /**
       * @deprecated The language used in the episode, identified by a
       * [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated
       * and might be removed in the future. Please use the `languages` field instead.
       */
      language?: string;

      /**
       * Included in the response when a content restriction is applied.
       */
      restrictions?: Episode.Restrictions;

      /**
       * The user's most recent position in the episode. Set if the supplied access token
       * is a user token and has the scope 'user-read-playback-position'.
       */
      resume_point?: Episode.ResumePoint;
    }

    export namespace Episode {
      /**
       * External URLs for this episode.
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
       * The show on which the episode belongs.
       */
      export interface Show {
        /**
         * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.
         */
        id: string;

        /**
         * A list of the countries in which the show can be played, identified by their
         * [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
         */
        available_markets: Array<string>;

        /**
         * The copyright statements of the show.
         */
        copyrights: Array<Show.Copyright>;

        /**
         * A description of the show. HTML tags are stripped away from this field, use
         * `html_description` field in case HTML tags are needed.
         */
        description: string;

        /**
         * Whether or not the show has explicit content (true = yes it does; false = no it
         * does not OR unknown).
         */
        explicit: boolean;

        /**
         * External URLs for this show.
         */
        external_urls: Show.ExternalURLs;

        /**
         * A link to the Web API endpoint providing full details of the show.
         */
        href: string;

        /**
         * A description of the show. This field may contain HTML tags.
         */
        html_description: string;

        /**
         * The cover art for the show in various sizes, widest first.
         */
        images: Array<Show.Image>;

        /**
         * True if all of the shows episodes are hosted outside of Spotify's CDN. This
         * field might be `null` in some cases.
         */
        is_externally_hosted: boolean;

        /**
         * A list of the languages used in the show, identified by their
         * [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
         */
        languages: Array<string>;

        /**
         * The media type of the show.
         */
        media_type: string;

        /**
         * The name of the episode.
         */
        name: string;

        /**
         * The publisher of the show.
         */
        publisher: string;

        /**
         * The total number of episodes in the show.
         */
        total_episodes: number;

        /**
         * The object type.
         */
        type: 'show';

        /**
         * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
         * show.
         */
        uri: string;
      }

      export namespace Show {
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
         * External URLs for this show.
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

      /**
       * The user's most recent position in the episode. Set if the supplied access token
       * is a user token and has the scope 'user-read-playback-position'.
       */
      export interface ResumePoint {
        /**
         * Whether or not the episode has been fully played by the user.
         */
        fully_played?: boolean;

        /**
         * The user's most recent position in the episode in milliseconds.
         */
        resume_position_ms?: number;
      }
    }
  }
}

export type EpisodeCheckResponse = Array<boolean>;

export interface EpisodeListParams {
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

export interface EpisodeCheckParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the
   * episodes. Maximum: 50 IDs.
   */
  ids: string;
}

export interface EpisodeRemoveParams {
  /**
   * Query param: A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.
   */
  query_ids: string;

  /**
   * Body param: A JSON array of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum
   * of 50 items can be specified in one request. _**Note**: if the `ids` parameter
   * is present in the query string, any IDs listed here in the body will be
   * ignored._
   */
  body_ids?: Array<string>;

  [k: string]: unknown;
}

export interface EpisodeSaveParams {
  /**
   * Query param: A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50
   * IDs.
   */
  query_ids: string;

  /**
   * Body param: A JSON array of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum
   * of 50 items can be specified in one request. _**Note**: if the `ids` parameter
   * is present in the query string, any IDs listed here in the body will be
   * ignored._
   */
  body_ids: Array<string>;

  [k: string]: unknown;
}

export declare namespace Episodes {
  export {
    type EpisodeListResponse as EpisodeListResponse,
    type EpisodeCheckResponse as EpisodeCheckResponse,
    type EpisodeListParams as EpisodeListParams,
    type EpisodeCheckParams as EpisodeCheckParams,
    type EpisodeRemoveParams as EpisodeRemoveParams,
    type EpisodeSaveParams as EpisodeSaveParams,
  };
}
