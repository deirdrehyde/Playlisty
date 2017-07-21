import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    console.log(this.props);
    this.playlist = this.props.fetchPlaylist(this.props.playlistId);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { playlist } = this.props;
    this.props.destroyPlaylist(playlist);
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
        <button onClick={this.handleSubmit}>Delete Playlist</button>
      </form>
    )
  }
}

export default withRouter(PlaylistShow);
