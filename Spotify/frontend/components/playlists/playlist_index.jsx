import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: null
    };
    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }


  render () {
    console.log("rending playlist");
    const { playlists } = this.props;
    console.log(playlists);

    return(
      <div>
        <nav>
          <form>
            <button >New Playlist</button>
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
