import {
  RECEIVE_FOLLOWED_PLAYLISTS,
  RECEIVE_FOLLOWED_PLAYLIST,
  REMOVE_FOLLOWED_PLAYLIST } from '../actions/follow_actions';

const FollowReducer = (state ={}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_FOLLOWED_PLAYLISTS:
      return Object.assign({}, state, {followedPlaylists: action.followedPlaylists});
    case RECEIVE_FOLLOWED_PLAYLIST:
      return Object.assign({}, state, {followedPlaylists: action.playlist});
    // case REMOVE_FOLLOWED_PLAYLIST:
    //   return Object.assign({}, action.playlist);
    default:
      return state;
  }
};

export default FollowReducer;
