import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { allPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  playlists: allPlaylists(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
