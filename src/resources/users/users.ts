// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlaylistsAPI from './playlists';
import {
  PlaylistCreateParams,
  PlaylistCreateResponse,
  PlaylistListParams,
  PlaylistListResponse,
  Playlists,
} from './playlists';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  playlists: PlaylistsAPI.Playlists = new PlaylistsAPI.Playlists(this._client);

  /**
   * Get public profile information about a Spotify user.
   *
   * @example
   * ```ts
   * const response = await client.users.retrieveProfile(
   *   'smedjan',
   * );
   * ```
   */
  retrieveProfile(userID: string, options?: RequestOptions): APIPromise<UserRetrieveProfileResponse> {
    return this._client.get(path`/users/${userID}`, options);
  }
}

export interface UserRetrieveProfileResponse {
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
  external_urls?: UserRetrieveProfileResponse.ExternalURLs;

  /**
   * Information about the followers of this user.
   */
  followers?: UserRetrieveProfileResponse.Followers;

  /**
   * A link to the Web API endpoint for this user.
   */
  href?: string;

  /**
   * The user's profile image.
   */
  images?: Array<UserRetrieveProfileResponse.Image>;

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

export namespace UserRetrieveProfileResponse {
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

  /**
   * Information about the followers of this user.
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

Users.Playlists = Playlists;

export declare namespace Users {
  export { type UserRetrieveProfileResponse as UserRetrieveProfileResponse };

  export {
    Playlists as Playlists,
    type PlaylistCreateResponse as PlaylistCreateResponse,
    type PlaylistListResponse as PlaylistListResponse,
    type PlaylistCreateParams as PlaylistCreateParams,
    type PlaylistListParams as PlaylistListParams,
  };
}
