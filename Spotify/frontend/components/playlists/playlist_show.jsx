import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { playlist } = this.props;

    return (
      <form className="playist-show">
        <ul>
          <li>
            <h2>{playlist.name}</h2>
          </li>
        </ul>
      </form>
    )
  }
}

export default PlaylistShow;
