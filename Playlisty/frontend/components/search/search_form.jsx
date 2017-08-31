import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchword: "",
      playlists: [],
      songs: [],
      artists: [],
      noResults: false
    }
    this.fetchMatches = this.fetchMatches.bind(this);
    this.checkResults = this.checkResults.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.fetchMatches();
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
    this.props.fetchMatchingArtists(this.state.searchword),
    this.checkResults()
  }

  checkResults() {
    console.log(this.props.playlists);
    console.log(this.props.artists);
    console.log(this.props.songs);
    console.log(this.state.searchword);

    if (this.props.playlists.length < 1  && this.props.artists.length < 1 && this.props.songs.length < 1 && this.state.searchword !== "") {
      this.setState({
        noResults: true
      });
    } else {
      this.setState({
        noResults: false
      });
    }
  }



  render() {
    const { playlists, songs, artists } = this.props;
    return(
      <form className="search-form">


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
              autoFocus
              />
            </label>
          </div >

          <div className="search-results">
            <ul className="results-found">
              {this.state.noResults ?
                <li className="no-results-found">No Results Found</li> : null
              }


            </ul>
            <h2 className="search">Playlists</h2>
            <ul className="playlist-results">
                {playlists.map(playlist =>
                  <li className="search-result" ><Link key={playlist.id} to={`/playlists/${playlist.id}`}>{playlist.name}</Link></li>
                )}

            </ul>
            <h2 className="search">Songs</h2>
              <ul className="song-results">

                  {songs.map(song =>
                    <li className="search-result" ><Link key={song.id} to={`/playlists/${song.playlistId}`}>{song.title}</Link></li>
                  )}

              </ul>
            <h2 className="search">Artists</h2>
              <ul className="artist-results">

                  {artists.map(artist =>
                    <li className="search-result" ><Link key={artist.id} to={`/artists/${artist.id}`}>{artist.name}</Link></li>
                  )}

              </ul>

          </div>
        </div>



      </form>
    )
  }
}

export default withRouter(SearchForm);
