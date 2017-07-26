import React from 'react';
import { withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NowPlayingContainer from '../now_playing/now_playing_container';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchword: ""
    }

  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
    this.props.fetchMatchingPlaylists(this.state.searchword);
    this.props.fetchMatchingSongs(this.state.searchword);
    this.props.fetchMatchingArtists(this.state.searchword);
  }



  render() {
    console.log(this.props);
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

        </div>


      </form>
    )
  }
}

export default withRouter(SearchForm);
