import { connect } from 'react-redux';
import NowPlaying from './now_playing';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentSong: state.session.currentSong
});

const mapDispatchToProps = (dispatch) => ({
  playSong: song => dispatch(playSong(song)),
  pauseSong: () => dispatch(pauseSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
