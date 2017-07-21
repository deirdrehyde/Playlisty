import React from 'react';
import { Link } from 'react-router-dom';

const NowPlaying = ({ currentUser }) => (
  currentUser ? playing(currentUser) : null
)

const playing = () => (
  <h4></h4>
)


export default NowPlaying;
