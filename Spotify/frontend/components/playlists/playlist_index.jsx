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
        <ul>
          {playlists.map((playlist) => (
            <li key={playlist.id}><h1>{playlist.name}</h1></li>)
            )
          }
        </ul>
      </div>
    )

  }
}

export default withRouter(PlaylistIndex);
