import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';
import GreetingContainer from '../greeting/greeting_container';


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
    e.preventDefault();
    this.setState({
      showComponent: false,
    });
  }


  render () {
    const { playlists } = this.props;
    return(
      <div className="playlist-container">
        <div className="now-playing-bar">

        </div>
        <div className="top-container">
          <nav className="top-nav">
            <button onClick={this.renderPlaylistForm}>New Playlist</button>
            {this.state.showComponent ?
              (<PlaylistForm
                closePlaylistForm={this.closePlaylistForm}
                createPlaylist={this.props.createPlaylist}
                />) :
                null
              }

            </nav>
            <nav className="side-nav">
              <GreetingContainer/>
            </nav>
            <form className="content-form">
              <ul className="playlist-list">
                {playlists.map((playlist) => (
                  <div id="each-playlist">

                    <li className="playlist" key={playlist.id}>
                      <Link to={`/playlists/${playlist.id}`}
                        className="playlist-name"
                        onClick={this.props.fetchPlaylist}
                        ></Link>
                    </li>
                    <li>{playlist.name}</li>
                    <li>By {playlist.creator_id}</li>
                  </div>
                )
              )
            }
          </ul>
        </form>
      </div>

      </div>
    )

  }
}

export default withRouter(PlaylistIndex);
