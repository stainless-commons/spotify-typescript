// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tracks extends APIResource {
  /**
   * Get full details of the items of a playlist owned by a Spotify user.
   *
   * @example
   * ```ts
   * const track = await client.playlists.tracks.retrieve(
   *   '3cEYpjA9oz9GiPac4AsH4n',
   * );
   * ```
   */
  retrieve(
    playlistID: string,
    query: TrackRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrackRetrieveResponse> {
    return this._client.get(path`/playlists/${playlistID}/tracks`, { query, ...options });
  }

  /**
   * Either reorder or replace items in a playlist depending on the request's
   * parameters. To reorder items, include `range_start`, `insert_before`,
   * `range_length` and `snapshot_id` in the request's body. To replace items,
   * include `uris` as either a query parameter or in the request's body. Replacing
   * items in a playlist will overwrite its existing items. This operation can be
   * used for replacing or clearing items in a playlist. <br/> **Note**: Replace and
   * reorder are mutually exclusive operations which share the same endpoint, but
   * have different parameters. These operations can't be applied together in a
   * single request.
   *
   * @example
   * ```ts
   * const track = await client.playlists.tracks.update(
   *   '3cEYpjA9oz9GiPac4AsH4n',
   * );
   * ```
   */
  update(
    playlistID: string,
    params: TrackUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrackUpdateResponse> {
    const { query_uris, ...body } = params ?? {};
    return this._client.put(path`/playlists/${playlistID}/tracks`, {
      query: { uris: query_uris },
      body,
      ...options,
    });
  }

  /**
   * Add one or more items to a user's playlist.
   *
   * @example
   * ```ts
   * const response = await client.playlists.tracks.add(
   *   '3cEYpjA9oz9GiPac4AsH4n',
   * );
   * ```
   */
  add(
    playlistID: string,
    params: TrackAddParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrackAddResponse> {
    const { query_position, query_uris, ...body } = params ?? {};
    return this._client.post(path`/playlists/${playlistID}/tracks`, {
      query: { position: query_position, uris: query_uris },
      body,
      ...options,
    });
  }

  /**
   * Remove one or more items from a user's playlist.
   *
   * @example
   * ```ts
   * const track = await client.playlists.tracks.remove(
   *   '3cEYpjA9oz9GiPac4AsH4n',
   *   { tracks: [{}] },
   * );
   * ```
   */
  remove(
    playlistID: string,
    body: TrackRemoveParams,
    options?: RequestOptions,
  ): APIPromise<TrackRemoveResponse> {
    return this._client.delete(path`/playlists/${playlistID}/tracks`, { body, ...options });
  }
}

export interface TrackRetrieveResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<TrackRetrieveResponse.Item>;

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

export namespace TrackRetrieveResponse {
  export interface Item {
    /**
     * The date and time the track or episode was added. _**Note**: some very old
     * playlists may return `null` in this field._
     */
    added_at?: string;

    /**
     * The Spotify user who added the track or episode. _**Note**: some very old
     * playlists may return `null` in this field._
     */
    added_by?: Item.AddedBy;

    /**
     * Whether this track or episode is a
     * [local file](/documentation/web-api/concepts/playlists/#local-files) or not.
     */
    is_local?: boolean;

    /**
     * Information about the track or episode.
     */
    track?: Item.Track | Item.Episode;
  }

  export namespace Item {
    /**
     * The Spotify user who added the track or episode. _**Note**: some very old
     * playlists may return `null` in this field._
     */
    export interface AddedBy {
      /**
       * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this
       * user.
       */
      id?: string;

      /**
       * Known public external URLs for this user.
       */
      external_urls?: AddedBy.ExternalURLs;

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

    export namespace AddedBy {
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

export interface TrackUpdateResponse {
  snapshot_id?: string;
}

export interface TrackAddResponse {
  snapshot_id?: string;
}

export interface TrackRemoveResponse {
  snapshot_id?: string;
}

export interface TrackRetrieveParams {
  /**
   * A comma-separated list of item types that your client supports besides the
   * default `track` type. Valid types are: `track` and `episode`.<br/> _**Note**:
   * This parameter was introduced to allow existing clients to maintain their
   * current behaviour and might be deprecated in the future._<br/> In addition to
   * providing this parameter, make sure that your client properly handles cases of
   * new types in the future by checking against the `type` field of each object.
   */
  additional_types?: string;

  /**
   * Filters for the query: a comma-separated list of the fields to return. If
   * omitted, all fields are returned. For example, to get just the total number of
   * items and the request limit:<br/>`fields=total,limit`<br/>A dot separator can be
   * used to specify non-reoccurring fields, while parentheses can be used to specify
   * reoccurring fields within objects. For example, to get just the added date and
   * user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use multiple
   * parentheses to drill down into nested objects, for
   * example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields can be
   * excluded by prefixing them with an exclamation mark, for
   * example:<br/>`fields=items.track.album(!external_urls,images)`
   */
  fields?: string;

  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 100.
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

export interface TrackUpdateParams {
  /**
   * Query param: A comma-separated list of
   * [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be
   * track or episode URIs. For example:
   * `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A
   * maximum of 100 items can be set in one request.
   */
  query_uris?: string;

  /**
   * Body param: The position where the items should be inserted.<br/>To reorder the
   * items to the end of the playlist, simply set _insert_before_ to the position
   * after the last item.<br/>Examples:<br/>To reorder the first item to the last
   * position in a playlist with 10 items, set _range_start_ to 0, and
   * _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items
   * to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.
   */
  insert_before?: number;

  /**
   * Body param: The amount of items to be reordered. Defaults to 1 if not
   * set.<br/>The range of items to be reordered begins from the _range_start_
   * position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To
   * move the items at index 9-10 to the start of the playlist, _range_start_ is set
   * to 9, and _range_length_ is set to 2.
   */
  range_length?: number;

  /**
   * Body param: The position of the first item to be reordered.
   */
  range_start?: number;

  /**
   * Body param: The playlist's snapshot ID against which you want to make the
   * changes.
   */
  snapshot_id?: string;

  /**
   * Body param
   */
  body_uris?: Array<string>;

  [k: string]: unknown;
}

export interface TrackAddParams {
  /**
   * Query param: The position to insert the items, a zero-based index. For example,
   * to insert the items in the first position: `position=0`; to insert the items in
   * the third position: `position=2`. If omitted, the items will be appended to the
   * playlist. Items are added in the order they are listed in the query string or
   * request body.
   */
  query_position?: number;

  /**
   * Query param: A comma-separated list of
   * [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be
   * track or episode URIs. For
   * example:<br/>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A
   * maximum of 100 items can be added in one request. <br/> _**Note**: it is likely
   * that passing a large number of item URIs as a query parameter will exceed the
   * maximum length of the request URI. When adding a large number of items, it is
   * recommended to pass them in the request body, see below._
   */
  query_uris?: string;

  /**
   * Body param: The position to insert the items, a zero-based index. For example,
   * to insert the items in the first position: `position=0` ; to insert the items in
   * the third position: `position=2`. If omitted, the items will be appended to the
   * playlist. Items are added in the order they appear in the uris array. For
   * example:
   * `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
   */
  body_position?: number;

  /**
   * Body param: A JSON array of the
   * [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For
   * example:
   * `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A
   * maximum of 100 items can be added in one request. _**Note**: if the `uris`
   * parameter is present in the query string, any URIs listed here in the body will
   * be ignored._
   */
  body_uris?: Array<string>;

  [k: string]: unknown;
}

export interface TrackRemoveParams {
  /**
   * An array of objects containing
   * [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks
   * or episodes to remove. For example:
   * `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`.
   * A maximum of 100 objects can be sent at once.
   */
  tracks: Array<TrackRemoveParams.Track>;

  /**
   * The playlist's snapshot ID against which you want to make the changes. The API
   * will validate that the specified items exist and in the specified positions and
   * make the changes, even if more recent changes have been made to the playlist.
   */
  snapshot_id?: string;
}

export namespace TrackRemoveParams {
  export interface Track {
    /**
     * Spotify URI
     */
    uri?: string;
  }
}

export declare namespace Tracks {
  export {
    type TrackRetrieveResponse as TrackRetrieveResponse,
    type TrackUpdateResponse as TrackUpdateResponse,
    type TrackAddResponse as TrackAddResponse,
    type TrackRemoveResponse as TrackRemoveResponse,
    type TrackRetrieveParams as TrackRetrieveParams,
    type TrackUpdateParams as TrackUpdateParams,
    type TrackAddParams as TrackAddParams,
    type TrackRemoveParams as TrackRemoveParams,
  };
}
