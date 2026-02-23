import { SpotifyClient } from '@stainless-commons/spotify';

/**
 * Access Token flow: user-level auth with a pre-obtained token.
 * Required for user-specific endpoints (/me, saved tracks, user playlists).
 *
 * If SPOTIFY_ACCESS_TOKEN is set in the environment, you can omit the auth option:
 *   const client = new SpotifyClient();
 *
 * Or pass it explicitly:
 *   const client = new SpotifyClient({ auth: process.env['SPOTIFY_ACCESS_TOKEN']! });
 */
const client = new SpotifyClient();

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
