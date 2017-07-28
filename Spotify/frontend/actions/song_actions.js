import * as APIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const fetchSongs = () => (dispatch) => (
  APIUtil.fetchSongs().then((songs) => dispatch(receiveSongs(songs)))
);

export const fetchSong = (id) => (dispatch) => (
  APIUtil.fetchSong(id).then((song) => dispatch(receiveSong(song)))
);

export const fetchPlaylistSongs = (playlist_id) => (dispatch) => (
  APIUtil.fetchPlaylistSongs(playlist_id).then((songs) => dispatch(receiveSongs(songs)))
);

export const fetchPlaylistSongs = (playlist_id) => (dispatch) => (
  APIUtil.fetchPlaylistSongs(playlist_id).then((songs) => dispatch(receiveSongs(songs)))
);
