import SearchForm from './search_form';
import { connect } from 'react-redux';
import { fetchPlaylists, fetchSongs, fetchArtists } from '../../actions/search_actions';


const mapStateToProps = (state) => ({
  // songs: selectSongs(state, match.params.id),
  // playlists: selectPlaylists(state, match.params.id),
  // artists: selectArtists(state, match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: id => dispatch(fetchPlaylists(id)),
  fetchSongs: id => dispatch(fetchSongs(id)),
  fetchArtists: id => dispatch(fetchArtists(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
