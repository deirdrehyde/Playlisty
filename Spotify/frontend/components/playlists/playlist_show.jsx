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
    this.props.fetchPlaylist(this.props.playlistId).then(
      ({playlist}) => this.props.fetchUser(playlist.creator_id)
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const { playlist } = this.props;
    this.props.destroyPlaylist(playlist).then(
      this.props.history.push('/playlists')
    );
  }



  render() {
    const { playlist, user } = this.props;
    console.log(playlist);
    console.log({user});
    return (
      <form className="playist-show">
        <ul>
          <li>
            <h2>{playlist.name}</h2>
          </li>
          <li>By {playlist.creator}</li>
        </ul>
        <button onClick={this.handleSubmit}>Delete Playlist</button>
      </form>
    )
  }
}

export default withRouter(PlaylistShow);
