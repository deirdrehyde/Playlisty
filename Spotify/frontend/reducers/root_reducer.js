import SessionReducer from './session_reducer';
import PlaylistReducer from './playlist_reducer';
import SongReducer from './song_reducer';
import ArtistReducer from './artist_reducer';
import NowPlayingSongReducer from './now_playing_song_reducer';
import NowPlayingPlaylistReducer from './now_playing_playlist_reducer';
import SearchReducer from './search_reducer';
import FollowReducer from './follow_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  playlists: PlaylistReducer,
  songs: SongReducer,
  artists: ArtistReducer,
  nowPlayingSong: NowPlayingSongReducer,
  nowPlayingPlaylist: NowPlayingPlaylistReducer,
  search: SearchReducer,
  followedPlaylists: FollowReducer
});

export default RootReducer;
