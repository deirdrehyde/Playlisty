import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null,
      showComponent: true
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
    console.log(this.props);
    return (
      <form className="playlist-form">
        <h1>Create new playlist</h1>
        <div className="playlist-input">
          <label><h4>Playlist Name</h4>
            <br/>
            <input
              className="input"
              ref="name"
              value={ this.state.name }
              placeholder="Start typing..."
              onChange={ this.update('name') }
              />
          </label>
        </div>
        <button className="create-playlist" onClick={this.handleSubmit}>Create</button>
        <button className="cancel" onClick={this.props.closePlaylistForm}>Cancel</button>

      </form>
    )
  }

}

export default withRouter(PlaylistForm);
