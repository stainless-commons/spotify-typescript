// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiobooks extends APIResource {
  /**
   * Get Spotify catalog information for a single audiobook. Audiobooks are only
   * available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   */
  retrieve(
    id: string,
    query: AudiobookRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudiobookRetrieveResponse> {
    return this._client.get(path`/audiobooks/${id}`, { query, ...options });
  }

  /**
   * Get Spotify catalog information for several audiobooks identified by their
   * Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland,
   * New Zealand and Australia markets.
   */
  list(query: AudiobookListParams, options?: RequestOptions): APIPromise<AudiobookListResponse> {
    return this._client.get('/audiobooks', { query, ...options });
  }

  /**
   * Get Spotify catalog information about an audiobook's chapters. Audiobooks are
   * only available within the US, UK, Canada, Ireland, New Zealand and Australia
   * markets.
   */
  retrieveChapters(
    id: string,
    query: AudiobookRetrieveChaptersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudiobookRetrieveChaptersResponse> {
    return this._client.get(path`/audiobooks/${id}/chapters`, { query, ...options });
  }
}

export interface AudiobookRetrieveResponse {
  /**
   * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
   * audiobook.
   */
  id: string;

  /**
   * The author(s) for the audiobook.
   */
  authors: Array<AudiobookRetrieveResponse.Author>;

  /**
   * A list of the countries in which the audiobook can be played, identified by
   * their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * code.
   */
  available_markets: Array<string>;

  /**
   * The chapters of the audiobook.
   */
  chapters: AudiobookRetrieveResponse.Chapters;

  /**
   * The copyright statements of the audiobook.
   */
  copyrights: Array<AudiobookRetrieveResponse.Copyright>;

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
  external_urls: AudiobookRetrieveResponse.ExternalURLs;

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
  images: Array<AudiobookRetrieveResponse.Image>;

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
  narrators: Array<AudiobookRetrieveResponse.Narrator>;

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

export namespace AudiobookRetrieveResponse {
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

export interface AudiobookListResponse {
  audiobooks: Array<AudiobookListResponse.Audiobook>;
}

export namespace AudiobookListResponse {
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

export interface AudiobookRetrieveChaptersResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<AudiobookRetrieveChaptersResponse.Item>;

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

export namespace AudiobookRetrieveChaptersResponse {
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

export interface AudiobookRetrieveParams {
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

export interface AudiobookListParams {
  /**
   * A comma-separated list of the
   * [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example:
   * `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.
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

export interface AudiobookRetrieveChaptersParams {
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

export declare namespace Audiobooks {
  export {
    type AudiobookRetrieveResponse as AudiobookRetrieveResponse,
    type AudiobookListResponse as AudiobookListResponse,
    type AudiobookRetrieveChaptersResponse as AudiobookRetrieveChaptersResponse,
    type AudiobookRetrieveParams as AudiobookRetrieveParams,
    type AudiobookListParams as AudiobookListParams,
    type AudiobookRetrieveChaptersParams as AudiobookRetrieveChaptersParams,
  };
}
