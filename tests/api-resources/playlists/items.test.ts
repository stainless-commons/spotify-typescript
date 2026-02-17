// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spotify from '@stainless-commons/spotify';

const client = new Spotify({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.playlists.items.update('3cEYpjA9oz9GiPac4AsH4n');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.playlists.items.update(
        '3cEYpjA9oz9GiPac4AsH4n',
        {
          query_uris: 'uris',
          insert_before: 3,
          published: true,
          range_length: 2,
          range_start: 1,
          snapshot_id: 'snapshot_id',
          body_uris: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Spotify.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.playlists.items.list('3cEYpjA9oz9GiPac4AsH4n');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.playlists.items.list(
        '3cEYpjA9oz9GiPac4AsH4n',
        {
          additional_types: 'additional_types',
          fields: 'items(added_by.id,track(name,href,album(name,href)))',
          limit: 10,
          market: 'ES',
          offset: 5,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Spotify.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('add', async () => {
    const responsePromise = client.playlists.items.add('3cEYpjA9oz9GiPac4AsH4n');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.playlists.items.add(
        '3cEYpjA9oz9GiPac4AsH4n',
        {
          query_position: 0,
          query_uris: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M',
          body_position: 0,
          published: true,
          body_uris: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Spotify.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.playlists.items.remove('3cEYpjA9oz9GiPac4AsH4n', { items: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('remove: required and optional params', async () => {
    const response = await client.playlists.items.remove('3cEYpjA9oz9GiPac4AsH4n', {
      items: [{ uri: 'uri' }],
      published: true,
      snapshot_id: 'snapshot_id',
    });
  });
});
