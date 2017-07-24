import SongIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { allSongs } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  songs: allSongs(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: (id) => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);
