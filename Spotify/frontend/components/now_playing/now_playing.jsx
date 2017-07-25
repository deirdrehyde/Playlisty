import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { PlaybackControls } from 'react-player-controls';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: "",
      currentSongUrl: "",
      isPlaying: false
    }
  }

  render() {
    return(
      <div className="play-bar">
        <PlaybackControls />

        <ReactPlayer height="0" width="0" style="player" url={this.currentSongUrl}  />
      </div>
    )
  }
}



export default NowPlaying;
