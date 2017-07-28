import ArtistShow from './artist_show';
import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchArtistSongs } from '../../actions/song_actions';
import { selectArtist, allSongs } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => ({
  artistId: parseInt(match.params.id),
  artist: selectArtist(state, match.params.id),
  songs: allSongs(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  fetchArtistSongs: id => dispatch(fetchArtistSongs(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistShow);
