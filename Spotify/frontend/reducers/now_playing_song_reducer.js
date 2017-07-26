import { PAUSE, PLAY, SET } from '../actions/now_playing_song_actions';

const NowPlayingSongReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PAUSE:
      return Object.assign({}, state, {playing: false});

    case PLAY:
      return Object.assign({}, state, {playing: true});

    case SET:
      return Object.assign({}, state, {playing: true});

    default:
      return state;
  }
};

export default NowPlayingSongReducer;
