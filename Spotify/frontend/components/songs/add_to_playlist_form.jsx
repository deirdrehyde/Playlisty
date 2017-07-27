import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PlaylistForm from '../playlists/playlist_form';


class AddToPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPlaylistForm = this.renderPlaylistForm.bind(this);
    this.closePlaylistForm = this.closePlaylistForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.createPlaylist(playlist).then(
      this.props.closePlaylistForm()
    );
  }

  renderPlaylistForm(e) {
    e.preventDefault();
    this.setState({
      showComponent: true,
    });
  }

  closePlaylistForm(e) {
    if (e) { e.preventDefault(); }
    this.setState({
      showComponent: false,
    });
  }

  render() {
    const { playlists } = this.props;
    return (
      <form className="playlist-form">

        <h1>Add to playlist</h1>
          <ul className="playlist-list">
            {playlists.map((playlist) => (
              <div id="each-playlist">

                <li className="playlist-add" key={playlist.id}>
                  <Link key={playlist.id} to={`/playlists/${playlist.id}`}
                    className="playlist-name"
                    ></Link>
                </li>
                <li className="name">{playlist.name}</li>
              </div>
              )
            )
          }
        </ul>
        <div className="buttons">

          <button className="cancel" onClick={this.props.closeAddToPlaylistForm}>Cancel</button>
          <button className="create-playlist" onClick={this.handleSubmit}>Create</button>
          <button className="new-playlist" onClick={this.renderPlaylistForm}>New Playlist</button>
            {this.state.showComponent ?
              (<PlaylistForm
                closePlaylistForm={this.closePlaylistForm}
                createPlaylist={this.props.createPlaylist}
                />) :
                null
              }
        </div>

      </form>
    )
  }

}

export default withRouter(AddToPlaylistForm);
