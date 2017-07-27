import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PlayButton, PauseButton } from 'react-player-controls';


class SongIndex extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);

  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  playPause(song) {
    this.props.nowPlayingSong !== song ? this.props.setSong(song) :
    (this.props.playing ? this.props.pauseSong() : this.props.playSong(song));
  }


  render () {
    const { songs, playing, nowPlayingSong } = this.props;

    return(
      <div className="song-container">
        <div className="top-container">
          <nav className="top-nav">
            <nav className = "nav-items">
              <ul className="nav-items-list">
                <li className="nav"><Link to="/playlists">Playlists</Link></li>
                <li className="nav"><Link to="/songs">Songs</Link></li>
                <li className="nav"><Link to="/artists">Artists</Link></li>
              </ul>
            </nav>
          </nav>
        </div>


        <form className="song-form-index">

          <ul className="song-list">
            {songs.map((song) => (
              <div id="each-song">
                {(playing && song === nowPlayingSong) ?
                  (<PauseButton
                    onClick={() => this.playPause(song)} />) :
                    (<PlayButton
                      onClick={() => this.playPause(song)}
                      isEnabled={true}/>)
                }
                <li className="name">{song.title}</li>
                <li className="url">{song.artist}</li>
                  <li className="duration">
                    {Math.floor(song.duration/60)}:
                      {(song.duration%60 < 10) ?
                        Math.floor(song.duration%60)+"0" : Math.floor(song.duration%60)}
                  </li>
              </div>
              )
            )
          }
        </ul>
      </form>
      </div>
    )
  }
}

export default withRouter(SongIndex);
