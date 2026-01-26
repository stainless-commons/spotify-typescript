// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Images extends APIResource {
  /**
   * Get the current image associated with a specific playlist.
   *
   * @example
   * ```ts
   * const images = await client.playlists.images.retrieve(
   *   '3cEYpjA9oz9GiPac4AsH4n',
   * );
   * ```
   */
  retrieve(playlistID: string, options?: RequestOptions): APIPromise<ImageRetrieveResponse> {
    return this._client.get(path`/playlists/${playlistID}/images`, options);
  }

  /**
   * Replace the image used to represent a specific playlist.
   *
   * @example
   * ```ts
   * await client.playlists.images.update(
   *   '3cEYpjA9oz9GiPac4AsH4n',
   *   {
   *     body: '/9j/2wCEABoZGSccJz4lJT5CLy8vQkc9Ozs9R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHCcnMyYzPSYmPUc9Mj1HR0dEREdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//dAAQAAf/uAA5BZG9iZQBkwAAAAAH/wAARCAABAAEDACIAAREBAhEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAYBAQAAAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwAAARECEQA/AJgAH//Z',
   *   },
   * );
   * ```
   */
  update(playlistID: string, params: ImageUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.put(path`/playlists/${playlistID}/images`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'image/jpeg', Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ImageRetrieveResponse = Array<ImageRetrieveResponse.ImageRetrieveResponseItem>;

export namespace ImageRetrieveResponse {
  export interface ImageRetrieveResponseItem {
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

export interface ImageUpdateParams {
  /**
   * Base64 encoded JPEG image data, maximum payload size is 256 KB.
   */
  body: string;
}

export declare namespace Images {
  export { type ImageRetrieveResponse as ImageRetrieveResponse, type ImageUpdateParams as ImageUpdateParams };
}
