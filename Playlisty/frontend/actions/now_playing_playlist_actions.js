import * as APIUtil from '../util/now_playing_api_util';


export const PAUSE = 'PAUSE';
export const PLAY = 'PLAY';
export const SET_PLAYLIST = 'SET_PLAYLIST';

export const pausePlaylist = () =>({
  type: PAUSE
});

export const playPlaylist = (playlist) =>({
  type: PLAY,
  playlist
});

export const setPlaylist = (playlist) =>({
  type: SET_PLAYLIST,
  playlist
});
