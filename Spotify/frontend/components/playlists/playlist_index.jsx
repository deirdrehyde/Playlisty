import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PlaylistForm from './playlist_form';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null,
      showComponent: false
    };
    this.renderPlaylistForm = this.renderPlaylistForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  renderPlaylistForm() {
    this.setState({
      showComponent: true,
    });
  }


  render () {
    console.log("rending playlist");
    const { playlists } = this.props;
    console.log(playlists);

    return(
      <div>
        <nav>
          <form>
          <button onClick={this.renderPlaylistForm}>New Playlist</button>
          {this.state.showComponent ?
             <PlaylistForm /> :
             null
          }

            <ul className="playlist-list">
              {playlists.map((playlist) => (
                <li className="playlist" key={playlist.id}>
                  <h1>{playlist.name}</h1>
                </li>)
              )
            }
          </ul>
        </form>
        </nav>
      </div>
    )

  }
}

export default withRouter(PlaylistIndex);
