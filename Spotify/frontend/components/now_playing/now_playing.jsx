import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { PlayButton, PrevButton, NextButton } from 'react-player-controls';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // }
  }

  render() {
    return(
      <div className="play-bar">
        <NextButton />
        <PlayButton />
        <NextButton />
        <ReactPlayer height="0" width="0" style="player" url="http://res.cloudinary.com/douzdapki/video/upload/v1500915413/397913__rendersound2214__pencil-sharpener_ejrjsp.wav"  />
      </div>
    )
  }
}



export default NowPlaying;
