// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QueueAPI from './queue';
import { Queue, QueueAddParams, QueueGetResponse } from './queue';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Player extends APIResource {
  queue: QueueAPI.Queue = new QueueAPI.Queue(this._client);

  /**
   * Get the object currently being played on the user's Spotify account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.me.player.getCurrentlyPlaying();
   * ```
   */
  getCurrentlyPlaying(
    query: PlayerGetCurrentlyPlayingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlayerGetCurrentlyPlayingResponse> {
    return this._client.get('/me/player/currently-playing', { query, ...options });
  }

  /**
   * Get information about a user’s available Spotify Connect devices. Some device
   * models are not supported and will not be listed in the API response.
   *
   * @example
   * ```ts
   * const response = await client.me.player.getDevices();
   * ```
   */
  getDevices(options?: RequestOptions): APIPromise<PlayerGetDevicesResponse> {
    return this._client.get('/me/player/devices', options);
  }

  /**
   * Get tracks from the current user's recently played tracks. _**Note**: Currently
   * doesn't support podcast episodes._
   *
   * @example
   * ```ts
   * const response = await client.me.player.getRecentlyPlayed();
   * ```
   */
  getRecentlyPlayed(
    query: PlayerGetRecentlyPlayedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlayerGetRecentlyPlayedResponse> {
    return this._client.get('/me/player/recently-played', { query, ...options });
  }

  /**
   * Get information about the user’s current playback state, including track or
   * episode, progress, and active device.
   *
   * @example
   * ```ts
   * const response = await client.me.player.getState();
   * ```
   */
  getState(
    query: PlayerGetStateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlayerGetStateResponse> {
    return this._client.get('/me/player', { query, ...options });
  }

  /**
   * Pause playback on the user's account. This API only works for users who have
   * Spotify Premium. The order of execution is not guaranteed when you use this API
   * with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.pausePlayback();
   * ```
   */
  pausePlayback(
    params: PlayerPausePlaybackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { device_id } = params ?? {};
    return this._client.put('/me/player/pause', {
      query: { device_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Seeks to the given position in the user’s currently playing track. This API only
   * works for users who have Spotify Premium. The order of execution is not
   * guaranteed when you use this API with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.seek({ position_ms: 25000 });
   * ```
   */
  seek(params: PlayerSeekParams, options?: RequestOptions): APIPromise<void> {
    const { position_ms, device_id } = params;
    return this._client.put('/me/player/seek', {
      query: { position_ms, device_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set the repeat mode for the user's playback. This API only works for users who
   * have Spotify Premium. The order of execution is not guaranteed when you use this
   * API with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.setRepeat({ state: 'context' });
   * ```
   */
  setRepeat(params: PlayerSetRepeatParams, options?: RequestOptions): APIPromise<void> {
    const { state, device_id } = params;
    return this._client.put('/me/player/repeat', {
      query: { state, device_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set the volume for the user’s current playback device. This API only works for
   * users who have Spotify Premium. The order of execution is not guaranteed when
   * you use this API with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.setVolume({ volume_percent: 50 });
   * ```
   */
  setVolume(params: PlayerSetVolumeParams, options?: RequestOptions): APIPromise<void> {
    const { volume_percent, device_id } = params;
    return this._client.put('/me/player/volume', {
      query: { volume_percent, device_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Skips to next track in the user’s queue. This API only works for users who have
   * Spotify Premium. The order of execution is not guaranteed when you use this API
   * with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.skipNext();
   * ```
   */
  skipNext(params: PlayerSkipNextParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { device_id } = params ?? {};
    return this._client.post('/me/player/next', {
      query: { device_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Skips to previous track in the user’s queue. This API only works for users who
   * have Spotify Premium. The order of execution is not guaranteed when you use this
   * API with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.skipPrevious();
   * ```
   */
  skipPrevious(
    params: PlayerSkipPreviousParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { device_id } = params ?? {};
    return this._client.post('/me/player/previous', {
      query: { device_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Start a new context or resume current playback on the user's active device. This
   * API only works for users who have Spotify Premium. The order of execution is not
   * guaranteed when you use this API with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.startPlayback();
   * ```
   */
  startPlayback(
    params: PlayerStartPlaybackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { device_id, ...body } = params ?? {};
    return this._client.put('/me/player/play', {
      query: { device_id },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Toggle shuffle on or off for user’s playback. This API only works for users who
   * have Spotify Premium. The order of execution is not guaranteed when you use this
   * API with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.toggleShuffle({ state: true });
   * ```
   */
  toggleShuffle(params: PlayerToggleShuffleParams, options?: RequestOptions): APIPromise<void> {
    const { state, device_id } = params;
    return this._client.put('/me/player/shuffle', {
      query: { state, device_id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Transfer playback to a new device and optionally begin playback. This API only
   * works for users who have Spotify Premium. The order of execution is not
   * guaranteed when you use this API with other Player API endpoints.
   *
   * @example
   * ```ts
   * await client.me.player.transfer({
   *   device_ids: ['74ASZWbe4lXaubB36ztrGX'],
   * });
   * ```
   */
  transfer(body: PlayerTransferParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/me/player', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PlayerGetCurrentlyPlayingResponse {
  /**
   * Allows to update the user interface based on which playback actions are
   * available within the current context.
   */
  actions?: PlayerGetCurrentlyPlayingResponse.Actions;

  /**
   * A Context Object. Can be `null`.
   */
  context?: PlayerGetCurrentlyPlayingResponse.Context;

  /**
   * The object type of the currently playing item. Can be one of `track`, `episode`,
   * `ad` or `unknown`.
   */
  currently_playing_type?: string;

  /**
   * If something is currently playing, return `true`.
   */
  is_playing?: boolean;

  /**
   * The currently playing track or episode. Can be `null`.
   */
  item?: PlayerGetCurrentlyPlayingResponse.Track | PlayerGetCurrentlyPlayingResponse.Episode;

  /**
   * Progress into the currently playing track or episode. Can be `null`.
   */
  progress_ms?: number;

  /**
   * Unix Millisecond Timestamp when data was fetched
   */
  timestamp?: number;
}

export namespace PlayerGetCurrentlyPlayingResponse {
  /**
   * Allows to update the user interface based on which playback actions are
   * available within the current context.
   */
  export interface Actions {
    /**
     * Interrupting playback. Optional field.
     */
    interrupting_playback?: boolean;

    /**
     * Pausing. Optional field.
     */
    pausing?: boolean;

    /**
     * Resuming. Optional field.
     */
    resuming?: boolean;

    /**
     * Seeking playback location. Optional field.
     */
    seeking?: boolean;

    /**
     * Skipping to the next context. Optional field.
     */
    skipping_next?: boolean;

    /**
     * Skipping to the previous context. Optional field.
     */
    skipping_prev?: boolean;

    /**
     * Toggling repeat context flag. Optional field.
     */
    toggling_repeat_context?: boolean;

    /**
     * Toggling repeat track flag. Optional field.
     */
    toggling_repeat_track?: boolean;

    /**
     * Toggling shuffle flag. Optional field.
     */
    toggling_shuffle?: boolean;

    /**
     * Transfering playback between devices. Optional field.
     */
    transferring_playback?: boolean;
  }

  /**
   * A Context Object. Can be `null`.
   */
  export interface Context {
    /**
     * External URLs for this context.
     */
    external_urls?: Context.ExternalURLs;

    /**
     * A link to the Web API endpoint providing full details of the track.
     */
    href?: string;

    /**
     * The object type, e.g. "artist", "playlist", "album", "show".
     */
    type?: string;

    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
     * context.
     */
    uri?: string;
  }

  export namespace Context {
    /**
     * External URLs for this context.
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

export interface PlayerGetDevicesResponse {
  devices: Array<PlayerGetDevicesResponse.Device>;
}

export namespace PlayerGetDevicesResponse {
  export interface Device {
    /**
     * The device ID. This ID is unique and persistent to some extent. However, this is
     * not guaranteed and any cached `device_id` should periodically be cleared out and
     * refetched as necessary.
     */
    id?: string | null;

    /**
     * If this device is the currently active device.
     */
    is_active?: boolean;

    /**
     * If this device is currently in a private session.
     */
    is_private_session?: boolean;

    /**
     * Whether controlling this device is restricted. At present if this is "true" then
     * no Web API commands will be accepted by this device.
     */
    is_restricted?: boolean;

    /**
     * A human-readable name for the device. Some devices have a name that the user can
     * configure (e.g. \"Loudest speaker\") and some devices have a generic name
     * associated with the manufacturer or device model.
     */
    name?: string;

    /**
     * If this device can be used to set the volume.
     */
    supports_volume?: boolean;

    /**
     * Device type, such as "computer", "smartphone" or "speaker".
     */
    type?: string;

    /**
     * The current volume in percent.
     */
    volume_percent?: number | null;
  }
}

export interface PlayerGetRecentlyPlayedResponse {
  /**
   * The cursors used to find the next set of items.
   */
  cursors?: PlayerGetRecentlyPlayedResponse.Cursors;

  /**
   * A link to the Web API endpoint returning the full result of the request.
   */
  href?: string;

  items?: Array<PlayerGetRecentlyPlayedResponse.Item>;

  /**
   * The maximum number of items in the response (as set in the query or by default).
   */
  limit?: number;

  /**
   * URL to the next page of items. ( `null` if none)
   */
  next?: string;

  /**
   * The total number of items available to return.
   */
  total?: number;
}

export namespace PlayerGetRecentlyPlayedResponse {
  /**
   * The cursors used to find the next set of items.
   */
  export interface Cursors {
    /**
     * The cursor to use as key to find the next page of items.
     */
    after?: string;

    /**
     * The cursor to use as key to find the previous page of items.
     */
    before?: string;
  }

  export interface Item {
    /**
     * The context the track was played from.
     */
    context?: Item.Context;

    /**
     * The date and time the track was played.
     */
    played_at?: string;

    /**
     * The track the user listened to.
     */
    track?: Item.Track;
  }

  export namespace Item {
    /**
     * The context the track was played from.
     */
    export interface Context {
      /**
       * External URLs for this context.
       */
      external_urls?: Context.ExternalURLs;

      /**
       * A link to the Web API endpoint providing full details of the track.
       */
      href?: string;

      /**
       * The object type, e.g. "artist", "playlist", "album", "show".
       */
      type?: string;

      /**
       * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
       * context.
       */
      uri?: string;
    }

    export namespace Context {
      /**
       * External URLs for this context.
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
     * The track the user listened to.
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

export interface PlayerGetStateResponse {
  /**
   * Allows to update the user interface based on which playback actions are
   * available within the current context.
   */
  actions?: PlayerGetStateResponse.Actions;

  /**
   * A Context Object. Can be `null`.
   */
  context?: PlayerGetStateResponse.Context;

  /**
   * The object type of the currently playing item. Can be one of `track`, `episode`,
   * `ad` or `unknown`.
   */
  currently_playing_type?: string;

  /**
   * The device that is currently active.
   */
  device?: PlayerGetStateResponse.Device;

  /**
   * If something is currently playing, return `true`.
   */
  is_playing?: boolean;

  /**
   * The currently playing track or episode. Can be `null`.
   */
  item?: PlayerGetStateResponse.Track | PlayerGetStateResponse.Episode;

  /**
   * Progress into the currently playing track or episode. Can be `null`.
   */
  progress_ms?: number;

  /**
   * off, track, context
   */
  repeat_state?: string;

  /**
   * If shuffle is on or off.
   */
  shuffle_state?: boolean;

  /**
   * Unix Millisecond Timestamp when playback state was last changed (play, pause,
   * skip, scrub, new song, etc.).
   */
  timestamp?: number;
}

export namespace PlayerGetStateResponse {
  /**
   * Allows to update the user interface based on which playback actions are
   * available within the current context.
   */
  export interface Actions {
    /**
     * Interrupting playback. Optional field.
     */
    interrupting_playback?: boolean;

    /**
     * Pausing. Optional field.
     */
    pausing?: boolean;

    /**
     * Resuming. Optional field.
     */
    resuming?: boolean;

    /**
     * Seeking playback location. Optional field.
     */
    seeking?: boolean;

    /**
     * Skipping to the next context. Optional field.
     */
    skipping_next?: boolean;

    /**
     * Skipping to the previous context. Optional field.
     */
    skipping_prev?: boolean;

    /**
     * Toggling repeat context flag. Optional field.
     */
    toggling_repeat_context?: boolean;

    /**
     * Toggling repeat track flag. Optional field.
     */
    toggling_repeat_track?: boolean;

    /**
     * Toggling shuffle flag. Optional field.
     */
    toggling_shuffle?: boolean;

    /**
     * Transfering playback between devices. Optional field.
     */
    transferring_playback?: boolean;
  }

  /**
   * A Context Object. Can be `null`.
   */
  export interface Context {
    /**
     * External URLs for this context.
     */
    external_urls?: Context.ExternalURLs;

    /**
     * A link to the Web API endpoint providing full details of the track.
     */
    href?: string;

    /**
     * The object type, e.g. "artist", "playlist", "album", "show".
     */
    type?: string;

    /**
     * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
     * context.
     */
    uri?: string;
  }

  export namespace Context {
    /**
     * External URLs for this context.
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
   * The device that is currently active.
   */
  export interface Device {
    /**
     * The device ID. This ID is unique and persistent to some extent. However, this is
     * not guaranteed and any cached `device_id` should periodically be cleared out and
     * refetched as necessary.
     */
    id?: string | null;

    /**
     * If this device is the currently active device.
     */
    is_active?: boolean;

    /**
     * If this device is currently in a private session.
     */
    is_private_session?: boolean;

    /**
     * Whether controlling this device is restricted. At present if this is "true" then
     * no Web API commands will be accepted by this device.
     */
    is_restricted?: boolean;

    /**
     * A human-readable name for the device. Some devices have a name that the user can
     * configure (e.g. \"Loudest speaker\") and some devices have a generic name
     * associated with the manufacturer or device model.
     */
    name?: string;

    /**
     * If this device can be used to set the volume.
     */
    supports_volume?: boolean;

    /**
     * Device type, such as "computer", "smartphone" or "speaker".
     */
    type?: string;

    /**
     * The current volume in percent.
     */
    volume_percent?: number | null;
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

export interface PlayerGetCurrentlyPlayingParams {
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

export interface PlayerGetRecentlyPlayedParams {
  /**
   * A Unix timestamp in milliseconds. Returns all items after (but not including)
   * this cursor position. If `after` is specified, `before` must not be specified.
   */
  after?: number;

  /**
   * A Unix timestamp in milliseconds. Returns all items before (but not including)
   * this cursor position. If `before` is specified, `after` must not be specified.
   */
  before?: number;

  /**
   * The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
   */
  limit?: number;
}

export interface PlayerGetStateParams {
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

export interface PlayerPausePlaybackParams {
  /**
   * The id of the device this command is targeting. If not supplied, the user's
   * currently active device is the target.
   */
  device_id?: string;
}

export interface PlayerSeekParams {
  /**
   * The position in milliseconds to seek to. Must be a positive number. Passing in a
   * position that is greater than the length of the track will cause the player to
   * start playing the next song.
   */
  position_ms: number;

  /**
   * The id of the device this command is targeting. If not supplied, the user's
   * currently active device is the target.
   */
  device_id?: string;
}

export interface PlayerSetRepeatParams {
  /**
   * **track**, **context** or **off**.<br/> **track** will repeat the current
   * track.<br/> **context** will repeat the current context.<br/> **off** will turn
   * repeat off.
   */
  state: string;

  /**
   * The id of the device this command is targeting. If not supplied, the user's
   * currently active device is the target.
   */
  device_id?: string;
}

export interface PlayerSetVolumeParams {
  /**
   * The volume to set. Must be a value from 0 to 100 inclusive.
   */
  volume_percent: number;

  /**
   * The id of the device this command is targeting. If not supplied, the user's
   * currently active device is the target.
   */
  device_id?: string;
}

export interface PlayerSkipNextParams {
  /**
   * The id of the device this command is targeting. If not supplied, the user's
   * currently active device is the target.
   */
  device_id?: string;
}

export interface PlayerSkipPreviousParams {
  /**
   * The id of the device this command is targeting. If not supplied, the user's
   * currently active device is the target.
   */
  device_id?: string;
}

export interface PlayerStartPlaybackParams {
  /**
   * Query param: The id of the device this command is targeting. If not supplied,
   * the user's currently active device is the target.
   */
  device_id?: string;

  /**
   * Body param: Optional. Spotify URI of the context to play. Valid contexts are
   * albums, artists & playlists.
   * `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
   */
  context_uri?: string;

  /**
   * Body param: Optional. Indicates from where in the context playback should start.
   * Only available when context_uri corresponds to an album or playlist object
   * "position" is zero based and can’t be negative. Example:
   * `"offset": {"position": 5}` "uri" is a string representing the uri of the item
   * to start at. Example:
   * `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
   */
  offset?: { [key: string]: unknown };

  /**
   * Body param: Indicates from what position to start playback. Must be a positive
   * number. Passing in a position that is greater than the length of the track will
   * cause the player to start playing the next song.
   */
  position_ms?: number;

  /**
   * Body param: Optional. A JSON array of the Spotify track URIs to play. For
   * example:
   * `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
   */
  uris?: Array<string>;

  [k: string]: unknown;
}

export interface PlayerToggleShuffleParams {
  /**
   * **true** : Shuffle user's playback.<br/> **false** : Do not shuffle user's
   * playback.
   */
  state: boolean;

  /**
   * The id of the device this command is targeting. If not supplied, the user's
   * currently active device is the target.
   */
  device_id?: string;
}

export interface PlayerTransferParams {
  /**
   * A JSON array containing the ID of the device on which playback should be
   * started/transferred.<br/>For
   * example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an
   * array is accepted, only a single device_id is currently supported. Supplying
   * more than one will return `400 Bad Request`_
   */
  device_ids: Array<string>;

  /**
   * **true**: ensure playback happens on new device.<br/>**false** or not provided:
   * keep the current playback state.
   */
  play?: boolean;

  [k: string]: unknown;
}

Player.Queue = Queue;

export declare namespace Player {
  export {
    type PlayerGetCurrentlyPlayingResponse as PlayerGetCurrentlyPlayingResponse,
    type PlayerGetDevicesResponse as PlayerGetDevicesResponse,
    type PlayerGetRecentlyPlayedResponse as PlayerGetRecentlyPlayedResponse,
    type PlayerGetStateResponse as PlayerGetStateResponse,
    type PlayerGetCurrentlyPlayingParams as PlayerGetCurrentlyPlayingParams,
    type PlayerGetRecentlyPlayedParams as PlayerGetRecentlyPlayedParams,
    type PlayerGetStateParams as PlayerGetStateParams,
    type PlayerPausePlaybackParams as PlayerPausePlaybackParams,
    type PlayerSeekParams as PlayerSeekParams,
    type PlayerSetRepeatParams as PlayerSetRepeatParams,
    type PlayerSetVolumeParams as PlayerSetVolumeParams,
    type PlayerSkipNextParams as PlayerSkipNextParams,
    type PlayerSkipPreviousParams as PlayerSkipPreviousParams,
    type PlayerStartPlaybackParams as PlayerStartPlaybackParams,
    type PlayerToggleShuffleParams as PlayerToggleShuffleParams,
    type PlayerTransferParams as PlayerTransferParams,
  };

  export { Queue as Queue, type QueueGetResponse as QueueGetResponse, type QueueAddParams as QueueAddParams };
}
