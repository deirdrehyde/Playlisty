import { connect } from 'react-redux';

import { fetchPlaylist } from '../../actions/playlist_actions';
import { selectPlaylist } from '../../reducers/selectors';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, {match}) => ({
  playlistId: parseInt(match.params.playlistId),
  playlist: selectPlaylist(state, playlistId)
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
