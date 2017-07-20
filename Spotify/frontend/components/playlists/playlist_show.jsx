import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    console.log(this.props);
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

export default withRouter(PlaylistShow);
