import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_FOLLOWED_PLAYLIST, REMOVE_FOLLOWED_PLAYLIST } from '../actions/follow_actions';

const PlaylistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, action.playlists);
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, {[action.playlist.id]: action.playlist});
    case RECEIVE_FOLLOWED_PLAYLIST:
      return Object.assign({}, state, {[action.playlist.id]: action.playlist});
    case REMOVE_FOLLOWED_PLAYLIST:
      return Object.assign({}, state, {[action.playlist.id]: action.playlist});

    default:
      return state;
  }
};

export default PlaylistReducer;
