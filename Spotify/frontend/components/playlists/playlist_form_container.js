import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';

const mapDispatchToProps = (dispatch) => ({
  createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default(
  null,
  mapDispatchToProps
)(PlaylistForm);
