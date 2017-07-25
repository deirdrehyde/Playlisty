import SessionReducer from './session_reducer';
import PlaylistReducer from './playlist_reducer';
import SongReducer from './song_reducer';
import NowPlayingReducer from './now_playing_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  now_playing: NowPlayingReducer
});

export default RootReducer;
