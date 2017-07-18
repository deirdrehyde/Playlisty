import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => (
  currentUser ? greetingMessage(currentUser, logout) : sessionsPage()
)

const greetingMessage = (currentUser, logout) => (
  <div>
    <h1>Welcome {currentUser.username}!!</h1>
    <button onClick={logout}>Logout</button>
  </div>
)

const sessionsPage = () => (
  <nav>
    <Link to='/login'>Log In</Link>
    <Link to='/signup'>Sign Up</Link>
  </nav>
)

export default Greeting;
