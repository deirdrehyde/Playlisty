import React from 'react';
import { Link } from 'react-router-dom';
import { PlayButton, PauseButton } from 'react-player-controls';
import ReactPlayer from 'react-player';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <ReactPlayer url="http://res.cloudinary.com/douzdapki/video/upload/v1500915412/397915__klankbeeld__coast-seagull-ship-170512-1140_rfe9cr.wav" />
        <PlayButton />
        <PauseButton />
      </div>
    )
  }
}



export default NowPlaying;
