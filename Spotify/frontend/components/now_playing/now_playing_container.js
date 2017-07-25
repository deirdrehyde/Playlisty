import { connect } from 'react-redux';
import NowPlaying from './now_playing';

const mapStateToProps = (state) => ({
  currentSong: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  playSong: song => dispatch(playSong(song)),
  pauseSong: () => dispatch(pauseSong())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowPlaying);
