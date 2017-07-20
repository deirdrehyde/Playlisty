import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.createPlaylist({playlist});
  }

  render() {
    return (
      <form className="playlist-form" onSubmit={handleSubmit}>
        <label>Playlist Name:
          <input
            className="input"
            ref="name"
            value={ this.state.name }
            placeholder="Start typing..."
            onChange={ this.update('name') }
            />
        </label>
        <button className="create-playlist">Create Playlist</button>
      </form>
    )
  }

}
