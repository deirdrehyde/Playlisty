import { connect } from 'react-redux';

import { fetchPlaylist, fetchPlaylists, destroyPlaylist, updatePlaylist } from '../../actions/playlist_actions';
import { fetchPlaylistSongs } from '../../actions/song_actions';
import { playSong, pauseSong, setSong } from '../../actions/now_playing_song_actions';
import { playPlaylist, pausePlaylist, setPlaylist } from '../../actions/now_playing_playlist_actions';
import { requestFollowedPlaylists, followPlaylist, unfollowPlaylist } from '../../actions/follow_actions';
import { selectPlaylist, allSongs, allPlaylists } from '../../reducers/selectors';
import PlaylistShow from './playlist_show';

const mapStateToProps = (state, {match}) => ({
  currentUser: state.session.currentUser,
  playlistId: parseInt(match.params.id),
  playlist: selectPlaylist(state, match.params.id),
  nowPlayingSong: state.nowPlayingSong.song,
  nowPlayingPlaylist: state.nowPlayingPlaylist.playlist,
  followedPlaylists: state.followedPlaylists,
  playing: state.nowPlayingSong.playing,
  songs: allSongs(state),
  playlists: allPlaylists(state),
  followedPlaylists: state.followedPlaylists,
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylist: id => dispatch(fetchPlaylist(id)),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchPlaylistSongs: id => dispatch(fetchPlaylistSongs(id)),
  requestFollowedPlaylists: id => dispatch(requestFollowedPlaylists(id)),
  followPlaylist: (playlistId) => dispatch(followPlaylist(playlistId)),
  unfollowPlaylist: (id) => dispatch(unfollowPlaylist(id)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  destroyPlaylist: playlist => dispatch(destroyPlaylist(playlist)),
  playSong: song => dispatch(playSong(song)),
  setSong: song => dispatch(setSong(song)),
  pauseSong: song => dispatch(pauseSong(song)),
  playPlaylist: playlist => dispatch(playPlaylist(playlist)),
  setPlaylist: playlist => dispatch(setPlaylist(playlist)),
  pausePlaylist: playlist => dispatch(pausePlaylist(playlist))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
