import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => (
  currentUser ? greetingMessage(currentUser, logout) : null
)

const greetingMessage = (currentUser, logout) => (
  <div className="greeting">
    <div className="top-side-nav">
      <img className="logo-small" src="http://res.cloudinary.com/douzdapki/image/upload/v1500486429/Refresh_xdfvbr.png" />
      <Link to='/search' className='search-nav'>Search</Link>
      <Link to='/playlists' className='playlist-nav'>Your Music</Link>
    </div>
    <div className="bottom-side-nav">
      <h1>{currentUser.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  </div>
)

export default Greeting;
