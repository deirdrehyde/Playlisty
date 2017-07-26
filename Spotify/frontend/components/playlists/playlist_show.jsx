import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NowPlayingContainer from '../now_playing/now_playing_container';
import PlaylistEditForm from './playlist_edit_form';
import { PlayButton, PauseButton } from 'react-player-controls';


class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null,
      showComponent: false,
      isPlaying: false
    };
    this.renderPlaylistEditForm = this.renderPlaylistEditForm.bind(this);
    this.closePlaylistEditForm = this.closePlaylistEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
    this.playPauseSong = this.playPauseSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId)
      .then(this.props.fetchPlaylistSongs(this.props.playlistId));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { playlist } = this.props;
    this.props.destroyPlaylist(playlist).then(
      this.props.history.push('/playlists')
    );
  }

  renderPlaylistEditForm(e) {
    e.preventDefault();
    this.setState({
      showComponent: true
    });
  }

  closePlaylistEditForm(e) {
    if (e) { e.preventDefault(); }
    this.setState({
      showComponent: false
    });
  }

  playPlaylist(e) {
    this.setState({
      isPlaying: true
    });

  }
  playPauseSong(e) {
    this.setState({
      isPlaying: !this.state.isPlaying
    });

  }


  render() {
    const { playlist, songs } = this.props;
    return (
      <form className="playlist-show">

        <div className="side-nav">
          <nav className="side-nav-container">
            <GreetingContainer/>
          </nav>
        </div>


        <div className="now-playing-bar">
          <NowPlayingContainer
              playing={this.state.isPlaying}
              url={this.state.currentSongUrl}
            />
        </div>


        <div className="playlist-details">

            <div className="playlist-info">
              <ul className="info">
                <li className="playlist" key={playlist.id}>
                  {this.state.isPlaying ?
                    (<PauseButton
                      className="playlist-play"
                      onClick={this.playPauseSong}
                      isEnabled={true}/>) :
                      (<PlayButton
                        className="playlist-play"
                        onClick={this.playPauseSong}
                        isEnabled={true}/>)
                  }
                </li>
                <li className="playlists-name">
                  <h2>{playlist.name}</h2>
                </li>
                <li className="creators-name">By {playlist.creator}</li>
              </ul>
              <button className="edit" onClick={this.renderPlaylistEditForm}>Edit Playlist</button>
              {this.state.showComponent ?
                (<PlaylistEditForm
                  playlist={playlist}
                  closePlaylistEditForm={this.closePlaylistEditForm}
                  updatePlaylist={this.props.updatePlaylist}
                  />) :
                  null
                }
              <button className="delete" onClick={this.handleSubmit}>Delete Playlist</button>
            </div>

            <div className='playlist-song-list'>
              <form className="song-form">

                <ul className="song-list">
                  {songs.map((song) => (
                    <div id="each-song" key={song.id}>
                      <NowPlayingContainer
                        url={song.song_url}
                        />
                      <li className="name">{song.title}</li>
                      <li className="duration">{song.duration}</li>
                      <li className="url">{song.artist}</li>
                    </div>
                    )
                    )
                  }
                </ul>
              </form>
            </div>

          </div>
      </form>
    )
  }
}

export default withRouter(PlaylistShow);
