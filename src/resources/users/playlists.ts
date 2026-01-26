// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Playlists extends APIResource {
  /**
   * Create a playlist for a Spotify user. (The playlist will be empty until you
   * [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).) Each
   * user is generally limited to a maximum of 11000 playlists.
   *
   * @example
   * ```ts
   * const playlist = await client.users.playlists.create(
   *   'smedjan',
   *   { name: 'New Playlist' },
   * );
   * ```
   */
  create(
    userID: string,
    body: PlaylistCreateParams,
    options?: RequestOptions,
  ): APIPromise<PlaylistCreateResponse> {
    return this._client.post(path`/users/${userID}/playlists`, { body, ...options });
  }

  /**
   * Get a list of the playlists owned or followed by a Spotify user.
   *
   * @example
   * ```ts
   * const playlists = await client.users.playlists.list(
   *   'smedjan',
   * );
   * ```
   */
  list(
    userID: string,
    query: PlaylistListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlaylistListResponse> {
    return this._client.get(path`/users/${userID}/playlists`, { query, ...options });
  }
}

export interface PlaylistCreateResponse {
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
  description?: string | null;

  /**
   * Known external URLs for this playlist.
   */
  external_urls?: PlaylistCreateResponse.ExternalURLs;

  /**
   * Information about the followers of the playlist.
   */
  followers?: PlaylistCreateResponse.Followers;

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
  images?: Array<PlaylistCreateResponse.Image>;

  /**
   * The name of the playlist.
   */
  name?: string;

  /**
   * The user who owns the playlist
   */
  owner?: PlaylistCreateResponse.Owner;

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
   * The tracks of the playlist.
   */
  tracks?: PlaylistCreateResponse.Tracks;

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

export namespace PlaylistCreateResponse {
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

  /**
   * Information about the followers of the playlist.
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
   * The tracks of the playlist.
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
}

export interface PlaylistListResponse {
  /**
   * A link to the Web API endpoint returning the full result of the request
   */
  href: string;

  items: Array<PlaylistListResponse.Item>;

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

export namespace PlaylistListResponse {
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

export interface PlaylistCreateParams {
  /**
   * The name for the new playlist, for example `"Your Coolest Playlist"`. This name
   * does not need to be unique; a user may have several playlists with the same
   * name.
   */
  name: string;

  /**
   * Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to
   * create a collaborative playlist you must also set `public` to `false`. To create
   * collaborative playlists you must have granted `playlist-modify-private` and
   * `playlist-modify-public`
   * [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._
   */
  collaborative?: boolean;

  /**
   * value for playlist description as displayed in Spotify Clients and in the Web
   * API.
   */
  description?: string;

  /**
   * Defaults to `true`. The playlist's public/private status (if it should be added
   * to the user's profile or not): `true` the playlist will be public, `false` the
   * playlist will be private. To be able to create private playlists, the user must
   * have granted the `playlist-modify-private`
   * [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about
   * public/private status, see
   * [Working with Playlists](/documentation/web-api/concepts/playlists)
   */
  public?: boolean;

  [k: string]: unknown;
}

export interface PlaylistListParams {
  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   */
  limit?: number;

  /**
   * The index of the first playlist to return. Default: 0 (the first object).
   * Maximum offset: 100.000\. Use with `limit` to get the next set of playlists.
   */
  offset?: number;
}

export declare namespace Playlists {
  export {
    type PlaylistCreateResponse as PlaylistCreateResponse,
    type PlaylistListResponse as PlaylistListResponse,
    type PlaylistCreateParams as PlaylistCreateParams,
    type PlaylistListParams as PlaylistListParams,
  };
}
