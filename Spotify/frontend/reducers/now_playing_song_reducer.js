import { PAUSE, PLAY, SET, STOP } from '../actions/now_playing_song_actions';

const NowPlayingSongReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PAUSE:
      return Object.assign({}, state, {playing: false});

    case PLAY:
      return Object.assign({}, state, {playing: true});

    case STOP:
      return Object.assign({}, state, {song: "", playing: false});

    case SET:
      return Object.assign({}, {song: action.song, playing: true});

    default:
      return state;
  }
};

export default NowPlayingSongReducer;
