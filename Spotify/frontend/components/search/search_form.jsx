import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);

  }

  render() {
    return(
      <form className="search-form">

        <h1>Search</h1>
        <div className="search-input">
          <label><h4>Playlist Name</h4>
            <br/>
            <input
              className="input"
              ref="name"
              value={ this.state.name }
              placeholder="Start typing..."
              onChange={ this.update('name') }
              />
          </label>
        </div >
        <div className="buttons">

          <button className="cancel" onClick={this.props.closePlaylistForm}>Cancel</button>
          <button className="search" onClick={this.handleSubmit}>Search</button>
        </div>

      </form>
    )
  }
}

export default withRouter(SearchForm);
