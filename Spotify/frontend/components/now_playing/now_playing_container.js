import { connect } from 'react-redux';
import NowPlaying from './now_playing';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(NowPlaying);
