import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => (
  currentUser ? greetingMessage(currentUser, logout) : null
)

const greetingMessage = (currentUser, logout) => (
  <div>
    <h1>Welcome {currentUser.username}!</h1>
    <button onClick={logout}>Logout</button>
  </div>
)

export default Greeting;
