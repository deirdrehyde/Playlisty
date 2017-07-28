import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

export const receivePlaylists = (playlists) => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = (playlist) => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const removePlaylist = playlist => ({
  type: REMOVE_PLAYLIST,
  playlist
});


export const fetchPlaylists = () => (dispatch) => (
  APIUtil.fetchPlaylists().then((playlists) => dispatch(receivePlaylists(playlists)))
);

export const fetchPlaylist = (id) => (dispatch) => (
  APIUtil.fetchPlaylist(id).then((playlist) => dispatch(receivePlaylist(playlist)))
);

export const createPlaylist = (playlist) => (dispatch) => (
  APIUtil.createPlaylist({playlist})
    .then(
    (playlist) => dispatch(receivePlaylist(playlist))
    )
  );

export const updatePlaylist = playlist => dispatch => (
  APIUtil.updatePlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)))
);

export const destroyPlaylist = playlist => dispatch => (
  APIUtil.deletePlaylist(playlist).then(playlist => dispatch(removePlaylist(playlist)))
);
