import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null
    };
  }

  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  render() {
    const { playlist } = this.props;

    return (
      <form className="playist-show">
        <ul>
          <li>
            <h2>{playlist.name}</h2>
          </li>
          <li>By {playlist.creator_id}</li>
        </ul>
      </form>
    )
  }
}

export default withRouter(PlaylistShow);
