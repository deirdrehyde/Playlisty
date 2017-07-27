import SongIndex from './song_index';
import { connect } from 'react-redux';
import { playSong, pauseSong, setSong } from '../../actions/now_playing_song_actions';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { allSongs, allPlaylists } from '../../reducers/selectors';
import { fetchPlaylists, createPlaylist } from '../../actions/playlist_actions';


const mapStateToProps = (state) => ({
  songs: allSongs(state),
  playlists: allPlaylists(state),
  nowPlayingSong: state.nowPlayingSong.song,
  playing: state.nowPlayingSong.playing,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  createPlaylist: playlist => dispatch(createPlaylist(playlist)),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: (id) => dispatch(fetchSong(id)),
  playSong: song => dispatch(playSong(song)),
  setSong: song => dispatch(setSong(song)),
  pauseSong: song => dispatch(pauseSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
