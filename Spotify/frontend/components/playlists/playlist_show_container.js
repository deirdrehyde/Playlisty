import { connect } from 'react-redux';

import { fetchPlaylist, destroyPlaylist, updatePlaylist } from '../../actions/playlist_actions';
import { selectPlaylist } from '../../reducers/selectors';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, {match}) => ({
  playlistId: parseInt(match.params.id),
  playlist: selectPlaylist(state, match.params.id),
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  destroyPlaylist: playlist => dispatch(destroyPlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
