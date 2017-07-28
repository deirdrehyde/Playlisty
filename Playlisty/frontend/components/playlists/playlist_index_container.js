import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';
import { fetchPlaylists, createPlaylist, fetchPlaylist } from '../../actions/playlist_actions';
import { allPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  playlists: allPlaylists(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
