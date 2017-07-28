import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout, allFollowedPlaylists}) => {
  console.log(allFollowedPlaylists);
  return(
  currentUser ? greetingMessage(currentUser, logout, allFollowedPlaylists) : null
)}

const greetingMessage = (currentUser, logout, allFollowedPlaylists) => (
  <div className="side-nav">
    <nav className="side-nav-container">
      <div className="greeting">
        <div className="top-side-nav">
          <Link to='/playlists' className="logo-small">
            <img className="logo-small" src="http://res.cloudinary.com/douzdapki/image/upload/v1500486429/Refresh_xdfvbr.png" />
          </Link>
          <Link to='/search' className='search-nav'>Search</Link>
          <Link to='/playlists' className='playlist-nav'>Your Music</Link>
          <div className="my-playlists">
            { (allFollowedPlaylists) ? (allFollowedPlaylists.map((playlist) =>
                <Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
            ) ) : null }
          </div>
        </div>
        <div className="bottom-side-nav">
          <h3>{currentUser.username}</h3>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </nav>
  </div>
)

export default Greeting;
