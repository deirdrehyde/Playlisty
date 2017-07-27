import { PAUSE, PLAY, SET_PLAYLIST } from '../actions/now_playing_playlist_actions';

const NowPlayingPlaylistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PAUSE:
      return Object.assign({}, state, {playing: false});

    case PLAY:
      return Object.assign({}, state, {playing: true});

    case SET_PLAYLIST:
      return Object.assign({}, state, {playlist: action.playlist, playing: true});

    default:
      return state;
  }
};

export default NowPlayingPlaylistReducer;
