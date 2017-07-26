import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

export const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});


export const fetchMatchingPlaylists = (name) => (dispatch) => (
  APIUtil.fetchMatchingPlaylists(name)
    .then(playlists => dispatch(receivePlaylists(playlists)))
)

export const fetchMatchingSongs = (title) => (dispatch) => (
  APIUtil.fetchMatchingSongs(title)
    .then(songs => dispatch(receiveSongs(songs)))
)

export const fetchMatchingArtists = (name) => (dispatch) => (
  APIUtil.fetchMatchingArtists(name)
    .then(artists => dispatch(receiveArtists(artists)))
)
