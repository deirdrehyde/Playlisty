import {
  PAUSE,
  PLAY } from '../actions/now_playing_actions';

const NowPlayingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PAUSE:
      return Object.assign({}, state, {playing: false});

    case PLAY:
      return Object.assign({}, state, {playing: true});


    default:
      return state;
  }
};

export default NowPlayingReducer;
