import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    }
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId)
      .then(this.props.fetchArtistSongs(this.props.artistId));
  }

  render() {
    const { artist, songs } = this.props;
    return (

      <div className="artist-show">
        <div className="artist-show-container">
          <h2>{artist.name}</h2>
          <h4>{artist.description}</h4>
          <h3>Songs</h3>
          <ul>
            {songs.map(song => <li>{song.title}</li>)}
          </ul>
        </div>

      </div>
    )
  }
}

export default withRouter(ArtistShow);
