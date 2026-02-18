import { SpotifyClient } from '@stainless-commons/spotify/lib/auth';

/**
 * Access Token flow: user-level auth with a pre-obtained token.
 * Required for user-specific endpoints (/me, saved tracks, user playlists).
 *
 * Required env vars:
 *   SPOTIFY_ACCESS_TOKEN  (user-scoped OAuth token)
 */
const client = new SpotifyClient({
  auth: process.env['SPOTIFY_ACCESS_TOKEN']!,
});

async function main() {
  const me = await client.me.retrieve();

  console.log('Current user profile:');
  console.log(`  Display name: ${me.display_name}`);
  console.log(`  ID:           ${me.id}`);
  console.log(`  Email:        ${me.email}`);
  console.log(`  Country:      ${me.country}`);
  console.log(`  Product:      ${me.product}`);
  console.log(`  Followers:    ${me.followers?.total}`);
}

main().catch(console.error);
