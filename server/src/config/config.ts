import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  dbPort: process.env.DB_PORT,
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  spotifyBaseUrl: process.env.SPOTIFY_BASE_URL,
  spotifyAuthUrl: process.env.SPOTIFY_AUTH_URL
};

console.debug(`configuration: ${JSON.stringify(config, null, 2)}`);

export default config;