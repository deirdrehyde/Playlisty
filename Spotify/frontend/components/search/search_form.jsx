import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NowPlayingContainer from '../now_playing/now_playing_container';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchword: ""
    }
    this.fetchMatches = this.fetchMatches.bind(this);

  }

  update(property) {
    return(
      e => {
        this.setState({
        [property]: e.target.value
        }, this.fetchMatches)
      }
    )
  }

  fetchMatches() {
    this.props.fetchMatchingPlaylists(this.state.searchword),
    this.props.fetchMatchingSongs(this.state.searchword),
    this.props.fetchMatchingArtists(this.state.searchword)
  }


  render() {
    console.log(this.props);
    const { playlists, songs, artists } = this.props;
    return(
      <form className="search-form">

        <div className="side-nav">
          <nav className="side-nav-container">
            <GreetingContainer/>
          </nav>
        </div>


        <div className="now-playing-bar">
          <NowPlayingContainer
            />
        </div>


        <div className='search-content'>

          <div className="search-input">
            <label><h4>Search for an Artist, Song or Playlist</h4>
            <br/>
            <input
              className="input"
              ref="name"
              value={ this.state.searchword }
              placeholder="Start typing..."
              onChange={ this.update('searchword') }
              />
            </label>
          </div >

          <div className="search-results">
            <h2>Playlists</h2>
            <ul className="playlist-results">
              <li>
                {playlists.map(playlist =>
                  <Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
                )}
              </li>
            </ul>
            <h2>Songs</h2>
              <ul className="song-results">
                <li>
                  {songs.map(song =>
                    <Link key={song.id} to={`/playlists/${song.playlistId}`}>{song.title}</Link>
                  )}
                </li>
              </ul>
            <h2>Artists</h2>
              <ul className="artist-results">
                <li>
                  {artists.map(artist =>
                    <Link key={artist.id} to={`/artists`}>{artist.name}</Link>
                  )}
                </li>
              </ul>

          </div>
        </div>



      </form>
    )
  }
}

export default withRouter(SearchForm);
