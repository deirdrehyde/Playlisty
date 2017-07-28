import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  render () {
    const { artists } = this.props;
    return(
      <div className="artist-container">

        <div className="top-container">
          <nav className="top-nav">
            <nav className = "nav-items">
              <ul className="nav-items-list">
                <li className="nav"><Link to="/playlists">Playlists</Link></li>
                <li className="nav"><Link to="/songs">Songs</Link></li>
                <li className="nav"><Link to="/artists">Artists</Link></li>
              </ul>
            </nav>
          </nav>
        </div>



        <form className="artist-form-index">

          <ul className="artist-list">
              <div id="each-artist">
                <li>
                  {artists.map((artist) => (
                  <Link key={artist.id} to={`/artists/${artist.id}`} className="name">{artist.name}</Link>
                      )
                    )
                  }
                </li>
              </div>
        </ul>
      </form>
      </div>
    )
  }
}

export default withRouter(ArtistIndex);
