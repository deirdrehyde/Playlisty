import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { PlaybackControls, PlayButton, PauseButton } from 'react-player-controls';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      playing: true,
      volume: 0.8,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    }
    this.load = this.load.bind(this);
    this.playPause = this.playPause.bind(this);
    this.stop = this.stop.bind(this);
  }

  load (url) {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }
  playPause() {
    this.setState({ playing: !this.state.playing })
  }
  stop() {
    this.setState({ url: null, playing: false })
  }


  render() {
    const {
      url, playing, volume,
      played, loaded, duration,
      playbackRate
    } = this.state
    return(
      <div className="play-bar">

        <PlaybackControls />
          <div className='player-wrapper'>
              <ReactPlayer
                ref={player => { this.player = player }}
                className='react-player'
                width='0'
                height='0'
                url={url}
                playing={playing}
                volume={volume}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={() => this.setState({ playing: true })}
                onPause={() => this.setState({ playing: false })}
                onEnded={() => this.setState({ playing: false })}
                onError={e => console.log('onError', e)}
                onDuration={duration => this.setState({ duration })}
              />
            </div>
      </div>
    )
  }
}



export default NowPlaying;
