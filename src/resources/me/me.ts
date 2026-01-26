// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AlbumsAPI from './albums';
import {
  AlbumCheckParams,
  AlbumCheckResponse,
  AlbumListParams,
  AlbumListResponse,
  AlbumRemoveParams,
  AlbumSaveParams,
  Albums,
} from './albums';
import * as AudiobooksAPI from './audiobooks';
import {
  AudiobookCheckParams,
  AudiobookCheckResponse,
  AudiobookListParams,
  AudiobookListResponse,
  AudiobookRemoveParams,
  AudiobookSaveParams,
  Audiobooks,
} from './audiobooks';
import * as EpisodesAPI from './episodes';
import {
  EpisodeCheckParams,
  EpisodeCheckResponse,
  EpisodeListParams,
  EpisodeListResponse,
  EpisodeRemoveParams,
  EpisodeSaveParams,
  Episodes,
} from './episodes';
import * as FollowingAPI from './following';
import {
  Following,
  FollowingCheckParams,
  FollowingCheckResponse,
  FollowingFollowParams,
  FollowingListParams,
  FollowingListResponse,
  FollowingUnfollowParams,
} from './following';
import * as PlaylistsAPI from './playlists';
import { PlaylistRetrieveParams, PlaylistRetrieveResponse, Playlists } from './playlists';
import * as ShowsAPI from './shows';
import {
  ShowCheckParams,
  ShowCheckResponse,
  ShowListParams,
  ShowListResponse,
  ShowRemoveParams,
  ShowSaveParams,
  Shows,
} from './shows';
import * as TopAPI from './top';
import {
  Top,
  TopGetArtistsParams,
  TopGetArtistsResponse,
  TopGetTracksParams,
  TopGetTracksResponse,
} from './top';
import * as TracksAPI from './tracks';
import {
  TrackCheckParams,
  TrackCheckResponse,
  TrackListParams,
  TrackListResponse,
  TrackRemoveParams,
  TrackSaveParams,
  Tracks,
} from './tracks';
import * as PlayerAPI from './player/player';
import {
  Player,
  PlayerGetCurrentlyPlayingParams,
  PlayerGetCurrentlyPlayingResponse,
  PlayerGetDevicesResponse,
  PlayerGetRecentlyPlayedParams,
  PlayerGetRecentlyPlayedResponse,
  PlayerGetStateParams,
  PlayerGetStateResponse,
  PlayerPausePlaybackParams,
  PlayerSeekParams,
  PlayerSetRepeatParams,
  PlayerSetVolumeParams,
  PlayerSkipNextParams,
  PlayerSkipPreviousParams,
  PlayerStartPlaybackParams,
  PlayerToggleShuffleParams,
  PlayerTransferParams,
} from './player/player';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Me extends APIResource {
  audiobooks: AudiobooksAPI.Audiobooks = new AudiobooksAPI.Audiobooks(this._client);
  playlists: PlaylistsAPI.Playlists = new PlaylistsAPI.Playlists(this._client);
  albums: AlbumsAPI.Albums = new AlbumsAPI.Albums(this._client);
  tracks: TracksAPI.Tracks = new TracksAPI.Tracks(this._client);
  episodes: EpisodesAPI.Episodes = new EpisodesAPI.Episodes(this._client);
  shows: ShowsAPI.Shows = new ShowsAPI.Shows(this._client);
  following: FollowingAPI.Following = new FollowingAPI.Following(this._client);
  player: PlayerAPI.Player = new PlayerAPI.Player(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get detailed profile information about the current user (including the current
   * user's username).
   *
   * @example
   * ```ts
   * const me = await client.me.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/me', options);
  }
}

export interface MeRetrieveResponse {
  /**
   * The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the
   * user.
   */
  id?: string;

  /**
   * The country of the user, as set in the user's account profile. An
   * [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   * _This field is only available when the current user has granted access to the
   * [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  country?: string;

  /**
   * The name displayed on the user's profile. `null` if not available.
   */
  display_name?: string;

  /**
   * The user's email address, as entered by the user when creating their account.
   * _**Important!** This email address is unverified; there is no proof that it
   * actually belongs to the user._ _This field is only available when the current
   * user has granted access to the
   * [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  email?: string;

  /**
   * The user's explicit content settings. _This field is only available when the
   * current user has granted access to the
   * [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  explicit_content?: MeRetrieveResponse.ExplicitContent;

  /**
   * Known external URLs for this user.
   */
  external_urls?: MeRetrieveResponse.ExternalURLs;

  /**
   * Information about the followers of the user.
   */
  followers?: MeRetrieveResponse.Followers;

  /**
   * A link to the Web API endpoint for this user.
   */
  href?: string;

  /**
   * The user's profile image.
   */
  images?: Array<MeRetrieveResponse.Image>;

  /**
   * The user's Spotify subscription level: "premium", "free", etc. (The subscription
   * level "open" can be considered the same as "free".) _This field is only
   * available when the current user has granted access to the
   * [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  product?: string;

  /**
   * The object type: "user"
   */
  type?: string;

  /**
   * The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the
   * user.
   */
  uri?: string;
}

export namespace MeRetrieveResponse {
  /**
   * The user's explicit content settings. _This field is only available when the
   * current user has granted access to the
   * [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes)
   * scope._
   */
  export interface ExplicitContent {
    /**
     * When `true`, indicates that explicit content should not be played.
     */
    filter_enabled?: boolean;

    /**
     * When `true`, indicates that the explicit content setting is locked and can't be
     * changed by the user.
     */
    filter_locked?: boolean;
  }

  /**
   * Known external URLs for this user.
   */
  export interface ExternalURLs {
    /**
     * The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the
     * object.
     */
    spotify?: string;
  }

  /**
   * Information about the followers of the user.
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

Me.Audiobooks = Audiobooks;
Me.Playlists = Playlists;
Me.Albums = Albums;
Me.Tracks = Tracks;
Me.Episodes = Episodes;
Me.Shows = Shows;
Me.Following = Following;
Me.Player = Player;
Me.Top = Top;

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };

  export {
    Audiobooks as Audiobooks,
    type AudiobookListResponse as AudiobookListResponse,
    type AudiobookCheckResponse as AudiobookCheckResponse,
    type AudiobookListParams as AudiobookListParams,
    type AudiobookCheckParams as AudiobookCheckParams,
    type AudiobookRemoveParams as AudiobookRemoveParams,
    type AudiobookSaveParams as AudiobookSaveParams,
  };

  export {
    Playlists as Playlists,
    type PlaylistRetrieveResponse as PlaylistRetrieveResponse,
    type PlaylistRetrieveParams as PlaylistRetrieveParams,
  };

  export {
    Albums as Albums,
    type AlbumListResponse as AlbumListResponse,
    type AlbumCheckResponse as AlbumCheckResponse,
    type AlbumListParams as AlbumListParams,
    type AlbumCheckParams as AlbumCheckParams,
    type AlbumRemoveParams as AlbumRemoveParams,
    type AlbumSaveParams as AlbumSaveParams,
  };

  export {
    Tracks as Tracks,
    type TrackListResponse as TrackListResponse,
    type TrackCheckResponse as TrackCheckResponse,
    type TrackListParams as TrackListParams,
    type TrackCheckParams as TrackCheckParams,
    type TrackRemoveParams as TrackRemoveParams,
    type TrackSaveParams as TrackSaveParams,
  };

  export {
    Episodes as Episodes,
    type EpisodeListResponse as EpisodeListResponse,
    type EpisodeCheckResponse as EpisodeCheckResponse,
    type EpisodeListParams as EpisodeListParams,
    type EpisodeCheckParams as EpisodeCheckParams,
    type EpisodeRemoveParams as EpisodeRemoveParams,
    type EpisodeSaveParams as EpisodeSaveParams,
  };

  export {
    Shows as Shows,
    type ShowListResponse as ShowListResponse,
    type ShowCheckResponse as ShowCheckResponse,
    type ShowListParams as ShowListParams,
    type ShowCheckParams as ShowCheckParams,
    type ShowRemoveParams as ShowRemoveParams,
    type ShowSaveParams as ShowSaveParams,
  };

  export {
    Following as Following,
    type FollowingListResponse as FollowingListResponse,
    type FollowingCheckResponse as FollowingCheckResponse,
    type FollowingListParams as FollowingListParams,
    type FollowingCheckParams as FollowingCheckParams,
    type FollowingFollowParams as FollowingFollowParams,
    type FollowingUnfollowParams as FollowingUnfollowParams,
  };

  export {
    Player as Player,
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

  export {
    Top as Top,
    type TopGetArtistsResponse as TopGetArtistsResponse,
    type TopGetTracksResponse as TopGetTracksResponse,
    type TopGetArtistsParams as TopGetArtistsParams,
    type TopGetTracksParams as TopGetTracksParams,
  };
}
