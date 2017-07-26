import * as APIUtil from '../util/now_playing_api_util';


export const PAUSE = 'PAUSE';
export const PLAY = 'PLAY';
export const SET = 'SET';

export const pausePlaylist = () =>({
  type: PAUSE
});

export const playPlaylist = () =>({
  type: PLAY
});

export const setPlaylist = () =>({
  type: SET
});
