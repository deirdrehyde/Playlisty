import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import GreetingContainer from '../greeting/greeting_container';
import NowPlayingContainer from '../now_playing/now_playing_container';
import { PlayButton } from 'react-player-controls';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null,
      showComponent: false
    };
    this.renderPlaylistForm = this.renderPlaylistForm.bind(this);
    this.closePlaylistForm = this.closePlaylistForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  renderPlaylistForm(e) {
    e.preventDefault();
    this.setState({
      showComponent: true,
    });
  }

  closePlaylistForm(e) {
    if (e) { e.preventDefault(); }
    this.setState({
      showComponent: false,
    });
  }


  render () {
    const { playlists } = this.props;
    return(
      <div className="playlist-container">
        <div className="now-playing-bar">
          <NowPlayingContainer/>
        </div>
        <div className="top-container">
          <nav className="top-nav">
            <nav className = "nav-items">
              <ul className="nav-items-list">
                <li className="nav"><Link to="/playlists">Playlists</Link></li>
                <li className="nav"><Link to="/songs">Songs</Link></li>
                <li className="nav"><Link to="/artists">Artists</Link></li>
              </ul>
              <button className="new-playlist" onClick={this.renderPlaylistForm}>New Playlist</button>
              {this.state.showComponent ?
                (<PlaylistForm
                  closePlaylistForm={this.closePlaylistForm}
                  createPlaylist={this.props.createPlaylist}
                  />) :
                  null
                }
            </nav>
            </nav>
            <div className="side-nav">
              <nav className="side-nav-container">
                <GreetingContainer/>
              </nav>
            </div>
            <div id="content">

              <form className="content-form">
                <ul className="playlist-list">
                  {playlists.map((playlist) => (
                    <div id="each-playlist">

                      <li className="playlist" key={playlist.id}>
                        <Link key={playlist.id} to={`/playlists/${playlist.id}`}
                          className="playlist-name"
                          ></Link>
                      </li>
                      <li className="name">{playlist.name}</li>
                      <li className="creator">By {playlist.creator}</li>
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

export default withRouter(PlaylistIndex);
