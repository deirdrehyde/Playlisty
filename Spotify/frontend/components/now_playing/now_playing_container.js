import { connect } from 'react-redux';
import { setSong, playSong, pauseSong, stopSong } from '../../actions/now_playing_song_actions';
import { setPlaylist, playPlaylist } from '../../actions/now_playing_playlist_actions';
import NowPlaying from './now_playing';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  nowPlayingSong: ownProps.nowPlayingSong || state.nowPlayingSong.song,
  nowPlayingPlaylist: ownProps.nowPlayingPlaylist || state.nowPlayingPlaylist.playlist,
  playing: state.nowPlayingSong.playing
});

const mapDispatchToProps = (dispatch) => ({
  playSong: song => dispatch(playSong(song)),
  setSong: song => dispatch(setSong(song)),
  stopSong: song => dispatch(stopSong(song)),
  pauseSong: () => dispatch(pauseSong()),
  playPlaylist: playlist => dispatch(playPlaylist(playlist)),
  setPlaylist: playlist => dispatch(setPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
