import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOWED_PLAYLISTS = 'RECEIVE_FOLLOWED_PLAYLISTS';
export const RECEIVE_FOLLOWED_PLAYLIST = 'RECEIVE_FOLLOWED_PLAYLIST';
export const REMOVE_FOLLOWED_PLAYLIST = 'REMOVE_FOLLOWED_PLAYLIST';

export const receiveFollowedPlaylists = followedPlaylists => ({
  type: RECEIVE_FOLLOWED_PLAYLISTS,
  followedPlaylists
});

export const receiveFollowedPlaylist = playlist => ({
  type: RECEIVE_FOLLOWED_PLAYLIST,
  playlist
});

export const removeFollowedPlaylist = playlist => ({
  type: REMOVE_FOLLOWED_PLAYLIST,
  playlist
});

// async
export const requestFollowedPlaylists = userId => dispatch => (
  APIUtil.fetchFollowedPlaylists(userId)
    .then(playlists => dispatch(receiveFollowedPlaylists(playlists)))
);

export const followPlaylist = playlistId => dispatch => (
  APIUtil.createPlaylistFollow(playlistId)
    .then(playlist => dispatch(receiveFollowedPlaylist(playlist)))
);

export const unfollowPlaylist = playlistId => dispatch => (
  APIUtil.deletePlaylistFollow(playlistId)
    .then(playlist => dispatch(removeFollowedPlaylist(playlist)))
);
