# spotify-search
Simple Node.js + React project to interact with Spotify API

Prerequisites:

- It is required to have client credentials to interact with Spotify API, [please see the guidance to get them](https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow).
Once you have them, set `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` environment variables with your account values.

Steps to run the application:

- The easiest way to run the application is using [https://docs.docker.com/compose/](Docker Compose).

`docker-compose up`

This will start the backend on http://localhost:3000/api and the frontend on http://localhost:5173/.

If you want to start the projects standalone, please see the instructions on the README file of each project.