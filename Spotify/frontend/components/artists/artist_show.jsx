import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NowPlayingContainer from '../now_playing/now_playing_container';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    }
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  render() {
    const { artist } = this.props;
    return (

      <div className="artist-show">
        <div className="artist-show-container">
          <h2>{artist.name}</h2>
        </div>

        <div className="side-nav">
          <nav className="side-nav-container">
            <GreetingContainer/>
          </nav>
        </div>


        <div className="now-playing-bar">
          <NowPlayingContainer
            />
        </div>

      </div>
    )
  }
}

export default withRouter(ArtistShow);
