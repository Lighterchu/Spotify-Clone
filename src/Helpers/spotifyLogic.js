const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const CLIENT_ID = '3e8375a239cf4b5b9b7d0c7cf7b577ce'
const REDIRECT_URL = 'https://bennyboy743.github.io/Spotify-Clone/'
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const accessUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
