import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlaylistEditForm from './playlist_edit_form';
import { PlayButton, PauseButton } from 'react-player-controls';


class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null,
      showComponent: false
    };
    this.renderPlaylistEditForm = this.renderPlaylistEditForm.bind(this);
    this.closePlaylistEditForm = this.closePlaylistEditForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.playPause = this.playPause.bind(this);
    this.playPausePlaylist = this.playPausePlaylist.bind(this);
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

  playPause(song) {
    this.props.nowPlayingSong !== song ? this.props.setSong(song) :
    (this.props.playing ? this.props.pauseSong() : this.props.playSong(song));
  }

  playPausePlaylist() {
    // this.props.nowPlayingSong !== song ?
    const { playlist, songs } = this.props;
    console.log(playlist);
    this.props.setSong(songs[0]);
    this.props.setPlaylist(playlist);
    this.props.playing ? this.props.pauseSong() : this.props.playPlaylist(songs);
  }


  render() {
    const { playlist, songs, playing, nowPlayingSong, currentUser} = this.props;
    console.log(this.props);
    return (
      <div className="playlist-show">

        <div className="playlist-details">

            <div className="playlist-info">
              <ul className="info">
                <li className="playlist" key={playlist.id}>
                  {this.state.isPlaying ?
                    (<PauseButton
                      className="playlist-play"
                      onClick={this.playPausePlaylist}/>) :
                      (<PlayButton
                        className="playlist-play"
                        onClick={this.playPausePlaylist}
                        isEnabled={true}/>)
                  }

                </li>
                <li className="playlists-name">
                  <h2>{playlist.name}</h2>
                </li>
                <li className="creators-name">By {playlist.creator}</li>
              </ul>
              {(currentUser.username === playlist.creator) ?
                <div className="change-buttons">

                  <button className="edit" onClick={this.renderPlaylistEditForm}>Edit Playlist</button>
                  <button className="delete" onClick={this.handleSubmit}>Delete Playlist</button>
                </div>
              : null}
              {this.state.showComponent ?
                (<PlaylistEditForm
                  playlist={playlist}
                  closePlaylistEditForm={this.closePlaylistEditForm}
                  updatePlaylist={this.props.updatePlaylist}
                  />) :
                  null
                }
            </div>

            <div className='playlist-song-list'>
              <form className="song-form">

                <ul className="song-list">
                  {songs.map((song) => (
                    <div id="each-song" key={song.id}>

                      {(playing && song === nowPlayingSong) ?
                        (<PauseButton
                          onClick={() => this.playPause(song)} />) :
                          (<PlayButton
                            onClick={() => this.playPause(song)}
                            isEnabled={true}/>)
                      }

                      <li className="name">{song.title}</li>
                      <li className="duration">
                        {Math.floor(song.duration/60)}:
                          {(song.duration%60 < 10) ?
                            Math.floor(song.duration%60)+"0" : Math.floor(song.duration%60)}
                      </li>
                      <li className="url">{song.artist}</li>
                    </div>
                    )
                    )
                  }
                </ul>
              </form>
            </div>

          </div>
      </div>
    )
  }
}

export default withRouter(PlaylistShow);
