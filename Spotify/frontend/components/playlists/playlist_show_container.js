import { connect } from 'react-redux';

import { fetchPlaylist, destroyPlaylist } from '../../actions/playlist_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectPlaylist, selectUser } from '../../reducers/selectors';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, {match}) => ({
  playlistId: parseInt(match.params.id),
  playlist: selectPlaylist(state, match.params.id),
  user: state.user,
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  destroyPlaylist: playlist => dispatch(destroyPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
