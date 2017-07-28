import * as APIUtil from '../util/now_playing_api_util';


export const PAUSE = 'PAUSE';
export const PLAY = 'PLAY';
export const STOP = 'STOP';
export const SET = 'SET';

export const pauseSong = () =>({
  type: PAUSE
});

export const playSong = (song) =>({
  type: PLAY,
  song
});

export const stopSong = (song) =>({
  type: STOP,
  song
});

export const setSong = (song) =>({
  type: SET,
  song
});
