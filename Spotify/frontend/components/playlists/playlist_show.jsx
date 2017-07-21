import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NowPlayingContainer from '../now_playing/now_playing_container';



class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { playlist } = this.props;
    this.props.destroyPlaylist(playlist).then(
      this.props.history.push('/playlists')
    );
  }



  render() {
    const { playlist } = this.props;
    return (
      <form className="playist-show">
        <div className="side-nav">
          <nav className="side-nav-container">
            <GreetingContainer/>
          </nav>
        </div>
        <div className="now-playing-bar">
          <NowPlayingContainer/>
        </div>
        <div className="playlist-info">
          <ul>
            <li>
              <h2>{playlist.name}</h2>
            </li>
            <li>By {playlist.creator}</li>
          </ul>
          <button onClick={this.handleSubmit}>Delete Playlist</button>
        </div>
      </form>
    )
  }
}

export default withRouter(PlaylistShow);
