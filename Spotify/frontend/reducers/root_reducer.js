import SessionReducer from './session_reducer';
import PlaylistReducer from './playlist_reducer';
import SongReducer from './song_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer
});

export default RootReducer;
