import { RECEIVE_SONGS, RECEIVE_PLAYLISTS, RECEIVE_ARTISTS } from '../actions/search_actions';


const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, action.songs);
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, action.playlists);
    case RECEIVE_ARTISTS:
      return Object.assign({}, action.artists);
    default:
      return state;
  }
};

export default SearchReducer;
