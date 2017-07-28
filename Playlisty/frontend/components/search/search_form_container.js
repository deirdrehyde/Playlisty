import SearchForm from './search_form';
import { connect } from 'react-redux';
import { fetchMatchingPlaylists, fetchMatchingSongs, fetchMatchingArtists } from '../../actions/search_actions';
import { allSongs, allPlaylists, allArtists } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  songs: allSongs(state),
  playlists: allPlaylists(state),
  artists: allArtists(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMatchingPlaylists: name => dispatch(fetchMatchingPlaylists(name)),
  fetchMatchingSongs: title => dispatch(fetchMatchingSongs(title)),
  fetchMatchingArtists: name => dispatch(fetchMatchingArtists(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
