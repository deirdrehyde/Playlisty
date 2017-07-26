import { connect } from 'react-redux';
import { setSong, playSong, pauseSong } from '../../actions/now_playing_song_actions';
import { setPlaylist, playPlaylist } from '../../actions/now_playing_playlist_actions';
import NowPlaying from './now_playing';

const mapStateToProps = (state) => ({
  playingSong: state.nowPlayingSong.song
});

const mapDispatchToProps = (dispatch, nextProps) => ({
  nowPlayingPlaylist: nextProps.nowPlayingPlaylist,
  nowPlayingSong: nextProps.nowPlayingSong,
  playSong: song => dispatch(playSong(song)),
  setSong: song => dispatch(setSong(song)),
  pauseSong: () => dispatch(pauseSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
