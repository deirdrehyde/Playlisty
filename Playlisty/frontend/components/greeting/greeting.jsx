import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.requestFollowedPlaylists(this.props.followedPlaylists);
  }

  render () {
    const { currentUser, logout, followedPlaylists } = this.props;
    if (!currentUser) { return null };
    return(
      <div className="side-nav">
        <nav className="side-nav-container">
          <div className="greeting">
            <div className="top-side-nav">
              <Link to='/playlists' className="logo-small">
                <img className="logo-small" src="https://s3-us-west-1.amazonaws.com/deirdrehydeappacademy/Refresh.png" />
              </Link>
              <Link to='/search' className='search-nav'>Search</Link>
              <Link to='/playlists' className='playlist-nav'>Your Music</Link>
              <ul className="my-playlists">
                { (followedPlaylists) ? (followedPlaylists.map((playlist) =>
                    <li className="followed"><Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link></li>
                ) ) : null }
              </ul>
            </div>
            <div className="bottom-side-nav">
              <h3>{currentUser.username}</h3>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}



export default Greeting;
