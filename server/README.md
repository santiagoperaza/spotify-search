# Server Implementation

REST API developed in Node.js + TypeScript integrated with Spotify API

### Prerequisites:

- It is required to have client credentials to interact with Spotify API, [please see the guidance to get them](https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow).
Once you have them, set `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` environment variables with your account values, or [add them to the env file located in the server implementation](./server/.env).

### Steps to run the application:

- `npm install`
- `npm run build`
- `npm run start`

This will start the server on http://localhost:3000/

Note: env file is used because it is a test project but it should not be used in production to store credentials.

Additional scripts:
- npm run lint

### List of API endpoints

- GET http://localhost:3000/api/search?artist={artistName} - Search artist by name and retrieves the list of albums. Also stores the record in MySQL DB using TypeORM
- GET http://localhost:3000/api/albums/{albumId}/tracks/ - Get album information providing its id.
- GET http://localhost:3000/api/history - Get the list of saved search records