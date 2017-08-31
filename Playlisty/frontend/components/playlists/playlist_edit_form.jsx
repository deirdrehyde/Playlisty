import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist;
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
    this.props.updatePlaylist(playlist).then(
      this.props.closePlaylistEditForm()
    );
  }

  render() {
    return (
      <form className="playlist-edit-form">

        <h1>Edit Playlist Details</h1>
        <div className="playlist-data">
          <label><h4>Playlist Name</h4>
            <br/>
            <input
              className="input"
              ref="name"
              value={ this.state.name }
              onChange={ this.update('name') }
              autoSelect
              />
          </label>
        </div >
        <div className="buttons">

          <button className="cancel" onClick={this.props.closePlaylistEditForm}>Cancel</button>
          <button className="update-playlist" onClick={this.handleSubmit}>Save</button>
        </div>

      </form>
    )
  }

}

export default withRouter(PlaylistEditForm);
