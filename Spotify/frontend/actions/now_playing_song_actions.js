import * as APIUtil from '../util/now_playing_api_util';


export const PAUSE = 'PAUSE';
export const PLAY = 'PLAY';
export const SET = 'SET';

export const pauseSong = () =>({
  type: PAUSE
});

export const playSong = () =>({
  type: PLAY
});

export const setSong = () =>({
  type: SET
});
