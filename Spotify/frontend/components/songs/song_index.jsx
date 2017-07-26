import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NowPlayingContainer from '../now_playing/now_playing_container';


class SongIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render () {
    const { songs } = this.props;
    return(
      <div className="song-container">
        <div className="now-playing-bar">
          <NowPlayingContainer/>
        </div>
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
        <div className="side-nav">
          <nav className="side-nav-container">
            <GreetingContainer/>
          </nav>
        </div>


        <form className="song-form-index">

          <ul className="song-list">
            {songs.map((song) => (
              <div id="each-song">
                <li className="name">{song.title}</li>
                  <li className="duration">
                    {Math.floor(song.duration/60)}:
                      {(song.duration%60 < 10) ?
                        Math.floor(song.duration%60)+"0" : Math.floor(song.duration%60)}
                  </li>
                <li className="url">{song.artist}</li>
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
