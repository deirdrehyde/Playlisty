import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { NextButton, PrevButton, PlayButton, PauseButton } from 'react-player-controls';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      volume: 0.8,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    }
    this.playPause = this.playPause.bind(this);
    this.load = this.load.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nowPlayingSong !== this.props.nowPlayingSong) {
      this.setState({
        url: nextProps.nowPlayingSong.song_url
      })
    }
  }

  playPause() {
    this.setState({
      nowPlayingPlaylist: this.props.nowPlayingPlaylist,
      nowPlayingSong: (this.props.nowPlayingSong),
      url: (this.props.nowPlayingSong.song_url )
      // nowPlayingSong: (this.props.nowPlayingSong ? this.props.nowPlayingSong : this.props.nowPlayingPlaylist[0]),
      // url: (this.props.nowPlayingSong ? this.props.nowPlayingSong.song_url : this.props.nowPlayingPlaylist[0].song_url)
    });
    this.props.playing ? this.props.pauseSong() : this.props.playSong(this.props.nowPlayingSong)
  }

  load (url) {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }

  stop() {
    this.setState({ url: null, playing: false })
  }


  render() {

    const {
      url, volume,
      played, loaded, duration,
      playbackRate
    } = this.state
    const { nowPlayingSong, playing, currentUser } = this.props
    console.log(this.state);
    console.log(this.props);
    if (!currentUser) {return null}
    return(
      <div className="now-playing-bar">
        <div className="play-bar">
          <div className="now-playing-details">
            <h4>{( nowPlayingSong ? nowPlayingSong.title : "")}</h4>
          </div>

          {playing ?
            (<PauseButton
              onClick={this.playPause}/>) :
              (<PlayButton
                onClick={this.playPause}
                isEnabled={true}/>)
          }



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
    </div>
    )
  }
}



export default NowPlaying;
