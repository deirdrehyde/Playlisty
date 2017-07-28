import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { requestFollowedPlaylists } from '../../actions/follow_actions';
import { allFollowedPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  followedPlaylists: allFollowedPlaylists(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  requestFollowedPlaylists: playlists => dispatch(requestFollowedPlaylists(playlists))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
