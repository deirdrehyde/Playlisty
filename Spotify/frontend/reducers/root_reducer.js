import SessionReducer from './session_reducer';
import PlaylistReducer from './playlist_reducer';
import SongReducer from './song_reducer';
import ArtistReducer from './artist_reducer';
import NowPlayingReducer from './now_playing_reducer';
import SearchReducer from './search_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  artists: ArtistReducer,
  now_playing: NowPlayingReducer,
  search: SearchReducer
});

export default RootReducer;
