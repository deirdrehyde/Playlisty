import ArtistShow from './artist_show';
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import { selectArtist } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => ({
  artistId: parseInt(match.params.id),
  artist: selectArtist(state, match.params.id),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtist(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
