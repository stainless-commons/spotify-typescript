import { SpotifyClient } from '@stainless-commons/spotify/lib/auth';

/**
 * Client Credentials flow: app-level auth, no user context.
 * Good for browsing catalog data (albums, artists, search).
 *
 * Required env vars:
 *   SPOTIFY_CLIENT_ID
 *   SPOTIFY_CLIENT_SECRET
 */
const client = new SpotifyClient({
  auth: {
    type: 'client_credentials',
    clientId: process.env['SPOTIFY_CLIENT_ID']!,
    clientSecret: process.env['SPOTIFY_CLIENT_SECRET']!,
  },
});

async function main() {
  const response = await client.browse.getNewReleases();
  console.log('New album releases:\n');

  for (const album of response.albums?.items ?? []) {
    const artists = album.artists?.map((a) => a.name).join(', ') ?? 'Unknown';
    console.log(`  - ${album.name} by ${artists}`);
  }
}

main().catch(console.error);
