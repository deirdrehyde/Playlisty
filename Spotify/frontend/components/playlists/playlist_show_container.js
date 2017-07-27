import { connect } from 'react-redux';

import { fetchPlaylist, destroyPlaylist, updatePlaylist } from '../../actions/playlist_actions';
import { fetchPlaylistSongs } from '../../actions/song_actions';
import { playSong, pauseSong, setSong } from '../../actions/now_playing_song_actions';
import { selectPlaylist, allSongs } from '../../reducers/selectors';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, {match}) => ({
  playlistId: parseInt(match.params.id),
  playlist: selectPlaylist(state, match.params.id),
  nowPlayingSong: state.nowPlayingSong.song,
  playing: state.nowPlayingSong.playing,
  songs: allSongs(state),
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchPlaylistSongs: id => dispatch(fetchPlaylistSongs(id)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  destroyPlaylist: playlist => dispatch(destroyPlaylist(playlist)),
  playSong: song => dispatch(playSong(song)),
  setSong: song => dispatch(setSong(song)),
  pauseSong: song => dispatch(pauseSong(song))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
