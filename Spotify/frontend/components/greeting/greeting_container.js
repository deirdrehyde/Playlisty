import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { receiveFollowedPlaylists } from '../../actions/follow_actions';
import { allFollowedPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  allFollowedPlaylists: allFollowedPlaylists(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveFollowedPlaylist: playlists => dispatch(receiveFollowedPlaylists(playlists))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
