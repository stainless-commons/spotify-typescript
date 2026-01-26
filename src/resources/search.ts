// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Get Spotify catalog information about albums, artists, playlists, tracks, shows,
   * episodes or audiobooks that match a keyword string. Audiobooks are only
   * available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   */
  retrieve(query: SearchRetrieveParams, options?: RequestOptions): APIPromise<SearchRetrieveResponse> {
    return this._client.get('/search', { query, ...options });
  }
}

export interface SearchRetrieveResponse {
  albums?: SearchRetrieveResponse.Albums;

  artists?: SearchRetrieveResponse.Artists;

  audiobooks?: SearchRetrieveResponse.Audiobooks;

  episodes?: SearchRetrieveResponse.Episodes;

  playlists?: SearchRetrieveResponse.Playlists;

  shows?: SearchRetrieveResponse.Shows;

  tracks?: SearchRetrieveResponse.Tracks;
}

export namespace SearchRetrieveResponse {
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

  export interface Artists {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Artists.Item>;

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

  export namespace Artists {
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

  export interface Audiobooks {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Audiobooks.Item>;

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

  export namespace Audiobooks {
    export interface Item {
      /**
       * The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the
       * audiobook.
       */
      id: string;

      /**
       * The author(s) for the audiobook.
       */
      authors: Array<Item.Author>;

      /**
       * A list of the countries in which the audiobook can be played, identified by
       * their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
       * code.
       */
      available_markets: Array<string>;

      /**
       * The copyright statements of the audiobook.
       */
      copyrights: Array<Item.Copyright>;

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
      external_urls: Item.ExternalURLs;

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
      images: Array<Item.Image>;

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
      narrators: Array<Item.Narrator>;

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

    export namespace Item {
      export interface Author {
        /**
         * The name of the author.
         */
        name?: string;
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

  export interface Episodes {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Episodes.Item>;

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

  export namespace Episodes {
    export interface Item {
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
      external_urls: Item.ExternalURLs;

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
      images: Array<Item.Image>;

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
      restrictions?: Item.Restrictions;

      /**
       * The user's most recent position in the episode. Set if the supplied access token
       * is a user token and has the scope 'user-read-playback-position'.
       */
      resume_point?: Item.ResumePoint;
    }

    export namespace Item {
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

  export interface Shows {
    /**
     * A link to the Web API endpoint returning the full result of the request
     */
    href: string;

    items: Array<Shows.Item>;

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

  export namespace Shows {
    export interface Item {
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
      copyrights: Array<Item.Copyright>;

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
      external_urls: Item.ExternalURLs;

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
      images: Array<Item.Image>;

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

    export namespace Item {
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
  }

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
       * The album on which the track appears. The album object includes a link in `href`
       * to full information about the album.
       */
      album?: Item.Album;

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
       * Known external IDs for the track.
       */
      external_ids?: Item.ExternalIDs;

      /**
       * Known external URLs for this track.
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
      linked_from?: Item.LinkedFrom;

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
      restrictions?: Item.Restrictions;

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

    export namespace Item {
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

export interface SearchRetrieveParams {
  /**
   * Your search query.
   *
   * You can narrow down your search using field filters. The available filters are
   * `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and
   * `genre`. Each field filter only applies to certain result types.
   *
   * The `artist` and `year` filters can be used while searching albums, artists and
   * tracks. You can filter on a single `year` or a range (e.g. 1955-1960).<br /> The
   * `album` filter can be used while searching albums and tracks.<br /> The `genre`
   * filter can be used while searching artists and tracks.<br /> The `isrc` and
   * `track` filters can be used while searching tracks.<br /> The `upc`, `tag:new`
   * and `tag:hipster` filters can only be used while searching albums. The `tag:new`
   * filter will return albums released in the past two weeks and `tag:hipster` can
   * be used to return only albums with the lowest 10% popularity.<br />
   */
  q: string;

  /**
   * A comma-separated list of item types to search across. Search results include
   * hits from all the specified item types. For example: `q=abacab&type=album,track`
   * returns both albums and tracks matching "abacab".
   */
  type: Array<'album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode' | 'audiobook'>;

  /**
   * If `include_external=audio` is specified it signals that the client can play
   * externally hosted audio content, and marks the content as playable in the
   * response. By default externally hosted audio content is marked as unplayable in
   * the response.
   */
  include_external?: 'audio';

  /**
   * The maximum number of results to return in each item type.
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
   * The index of the first result to return. Use with limit to get the next page of
   * search results.
   */
  offset?: number;
}

export declare namespace Search {
  export {
    type SearchRetrieveResponse as SearchRetrieveResponse,
    type SearchRetrieveParams as SearchRetrieveParams,
  };
}
