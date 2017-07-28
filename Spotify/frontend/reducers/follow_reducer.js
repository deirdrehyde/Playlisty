import {
  RECEIVE_FOLLOWED_PLAYLISTS,
  RECEIVE_FOLLOWED_PLAYLIST,
  REMOVE_FOLLOWED_PLAYLIST } from '../actions/follow_actions';
  import { merge } from 'lodash';

const FollowReducer = (state ={}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_FOLLOWED_PLAYLISTS:
      const playlists = action.followedPlaylists;
      console.log(playlists);
      return Object.assign({}, state, playlists);
    case RECEIVE_FOLLOWED_PLAYLIST:
      console.log(action.playlist);
      return Object.assign({}, state, {[action.playlist.id]: action.playlist});
    case REMOVE_FOLLOWED_PLAYLIST:
      const newState = merge({}, state)
      console.log(newState);
      delete newState[action.playlist.id]
      return newState;

    default:
      return state;
  }
};

export default FollowReducer;
