// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Audiobooks extends APIResource {
  /**
   * Get a list of the audiobooks saved in the current Spotify user's 'Your Music'
   * library.
   *
   * @example
   * ```ts
   * const audiobooks = await client.me.audiobooks.list();
   * ```
   */
  list(
    query: AudiobookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudiobookListResponse> {
    return this._client.get('/me/audiobooks', { query, ...options });
  }

  /**
   * Check if one or more audiobooks are already saved in the current Spotify user's
   * library.
   *
   * @example
   * ```ts
   * const response = await client.me.audiobooks.check({
   *   ids: '18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe',
   * });
   * ```
   */
  check(query: AudiobookCheckParams, options?: RequestOptions): APIPromise<AudiobookCheckResponse> {
    return this._client.get('/me/audiobooks/contains', { query, ...options });
  }

  /**
   * Remove one or more audiobooks from the Spotify user's library.
   *
   * @example
   * ```ts
   * await client.me.audiobooks.remove({
   *   ids: '18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe',
   * });
   * ```
   */
  remove(params: AudiobookRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { ids } = params;
    return this._client.delete('/me/audiobooks', {
      query: { ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Save one or more audiobooks to the current Spotify user's library.
   *
   * @example
   * ```ts
   * await client.me.audiobooks.save({
   *   ids: '18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe',
   * });
   * ```
   */
  save(params: AudiobookSaveParams, options?: RequestOptions): APIPromise<void> {
    const { ids } = params;
    return this._client.put('/me/audiobooks', {
      query: { ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AudiobookListResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<AudiobookListResponse.Item>;

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

export namespace AudiobookListResponse {
  export interface Item {
    /**
     * The date and time the audiobook was saved Timestamps are returned in ISO 8601
     * format as Coordinated Universal Time (UTC) with a zero offset:
     * YYYY-MM-DDTHH:MM:SSZ. If the time is imprecise (for example, the date/time of an
     * album release), an additional field indicates the precision; see for example,
     * release_date in an album object.
     */
    added_at?: string;

    /**
     * Information about the audiobook.
     */
    audiobook?: Item.Audiobook;
  }

  export namespace Item {
    /**
     * Information about the audiobook.
     */
    export interface Audiobook {
      /**
       * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
       * audiobook.
       */
      id: string;

      /**
       * The author(s) for the audiobook.
       */
      authors: Array<Audiobook.Author>;

      /**
       * A list of the countries in which the audiobook can be played, identified by
       * their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
       * code.
       */
      available_markets: Array<string>;

      /**
       * The chapters of the audiobook.
       */
      chapters: Audiobook.Chapters;

      /**
       * The copyright statements of the audiobook.
       */
      copyrights: Array<Audiobook.Copyright>;

      /**
       * A description of the audiobook. HTML tags are stripped away from this field, use
       * `html_description` field in case HTML tags are needed.
       */
      description: string;

      /**
       * Whether or not the audiobook has explicit content (true = yes it does; false =
       * no it does not OR unknown).
       */
      explicit: boolean;

      /**
       * External URLs for this audiobook.
       */
      external_urls: Audiobook.ExternalURLs;

      /**
       * A link to the Web API endpoint providing full details of the audiobook.
       */
      href: string;

      /**
       * A description of the audiobook. This field may contain HTML tags.
       */
      html_description: string;

      /**
       * The cover art for the audiobook in various sizes, widest first.
       */
      images: Array<Audiobook.Image>;

      /**
       * A list of the languages used in the audiobook, identified by their
       * [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
       */
      languages: Array<string>;

      /**
       * The media type of the audiobook.
       */
      media_type: string;

      /**
       * The name of the audiobook.
       */
      name: string;

      /**
       * The narrator(s) for the audiobook.
       */
      narrators: Array<Audiobook.Narrator>;

      /**
       * The publisher of the audiobook.
       */
      publisher: string;

      /**
       * The number of chapters in this audiobook.
       */
      total_chapters: number;

      /**
       * The object type.
       */
      type: 'audiobook';

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
       * audiobook.
       */
      uri: string;

      /**
       * The edition of the audiobook.
       */
      edition?: string;
    }

    export namespace Audiobook {
      export interface Author {
        /**
         * The name of the author.
         */
        name?: string;
      }

      /**
       * The chapters of the audiobook.
       */
      export interface Chapters {
        /**
         * A link to the Web API endpoint returning the full result of the request
         */
        href: string;

        items: Array<Chapters.Item>;

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

      export namespace Chapters {
        export interface Item {
          /**
           * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
           * chapter.
           */
          id: string;

          /**
           * @deprecated A URL to a 30 second preview (MP3 format) of the chapter. `null` if
           * not available.
           */
          audio_preview_url: string | null;

          /**
           * The number of the chapter
           */
          chapter_number: number;

          /**
           * A description of the chapter. HTML tags are stripped away from this field, use
           * `html_description` field in case HTML tags are needed.
           */
          description: string;

          /**
           * The chapter length in milliseconds.
           */
          duration_ms: number;

          /**
           * Whether or not the chapter has explicit content (true = yes it does; false = no
           * it does not OR unknown).
           */
          explicit: boolean;

          /**
           * External URLs for this chapter.
           */
          external_urls: Item.ExternalURLs;

          /**
           * A link to the Web API endpoint providing full details of the chapter.
           */
          href: string;

          /**
           * A description of the chapter. This field may contain HTML tags.
           */
          html_description: string;

          /**
           * The cover art for the chapter in various sizes, widest first.
           */
          images: Array<Item.Image>;

          /**
           * True if the chapter is playable in the given market. Otherwise false.
           */
          is_playable: boolean;

          /**
           * A list of the languages used in the chapter, identified by their
           * [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
           */
          languages: Array<string>;

          /**
           * The name of the chapter.
           */
          name: string;

          /**
           * The date the chapter was first released, for example `"1981-12-15"`. Depending
           * on the precision, it might be shown as `"1981"` or `"1981-12"`.
           */
          release_date: string;

          /**
           * The precision with which `release_date` value is known.
           */
          release_date_precision: 'year' | 'month' | 'day';

          /**
           * The object type.
           */
          type: 'episode';

          /**
           * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
           * chapter.
           */
          uri: string;

          /**
           * A list of the countries in which the chapter can be played, identified by their
           * [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
           */
          available_markets?: Array<string>;

          /**
           * Included in the response when a content restriction is applied.
           */
          restrictions?: Item.Restrictions;

          /**
           * The user's most recent position in the chapter. Set if the supplied access token
           * is a user token and has the scope 'user-read-playback-position'.
           */
          resume_point?: Item.ResumePoint;
        }

        export namespace Item {
          /**
           * External URLs for this chapter.
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
             * The reason for the restriction. Supported values:
             *
             * - `market` - The content item is not available in the given market.
             * - `product` - The content item is not available for the user's subscription
             *   type.
             * - `explicit` - The content item is explicit and the user's account is set to not
             *   play explicit content.
             * - `payment_required` - Payment is required to play the content item.
             *
             * Additional reasons may be added in the future. **Note**: If you use this field,
             * make sure that your application safely handles unknown values.
             */
            reason?: string;
          }

          /**
           * The user's most recent position in the chapter. Set if the supplied access token
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
       * External URLs for this audiobook.
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

      export interface Narrator {
        /**
         * The name of the Narrator.
         */
        name?: string;
      }
    }
  }
}

export type AudiobookCheckResponse = Array<boolean>;

export interface AudiobookListParams {
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

export interface AudiobookCheckParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.
   */
  ids: string;
}

export interface AudiobookRemoveParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.
   */
  ids: string;
}

export interface AudiobookSaveParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.
   */
  ids: string;
}

export declare namespace Audiobooks {
  export {
    type AudiobookListResponse as AudiobookListResponse,
    type AudiobookCheckResponse as AudiobookCheckResponse,
    type AudiobookListParams as AudiobookListParams,
    type AudiobookCheckParams as AudiobookCheckParams,
    type AudiobookRemoveParams as AudiobookRemoveParams,
    type AudiobookSaveParams as AudiobookSaveParams,
  };
}
