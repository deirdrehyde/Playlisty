import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/song_actions';


const SongReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, action.songs);
    case RECEIVE_SONG:
      return Object.assign({}, {[action.song.id]: action.song});
    default:
      return state;
  }
};

export default SongReducer;
