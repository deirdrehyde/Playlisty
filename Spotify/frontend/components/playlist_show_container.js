import { connect } from 'react-redux';

import { fetchPlaylist } from '../../actions/playlist_actions';
import { selectPlaylist } from '../../reducers/selectors';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, {match}) => ({
  const playlistId = parseInt(match.params.playlistId);
  const playlist = selectPlaylist(state, playlistId);
  return {
    playlistId,
    playlist
  };
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id))
})
