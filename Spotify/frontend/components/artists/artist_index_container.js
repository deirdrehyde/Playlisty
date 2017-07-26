import ArtistIndex from './artist_index';
import { connect } from 'react-redux';
import { fetchArtists, fetchArtist } from '../../actions/artist_actions';
import { allArtists } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  artists: allArtists(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchArtist: (id) => dispatch(fetchArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistIndex);
