import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clearErrors() {
    return e => (
      this.props.clearErrors()
    );
  }

  loginGuest(e) {
    e.preventDefault();
    const user = { username: "Guest", password: "password" };
    this.props.loginGuest(user);

  }

  navLink() {
     if (this.props.formType === 'Login') {
       return <Link onClick={this.clearErrors()} to="/signup">Don't have an account? Sign up here!</Link>;
     } else {
       return <Link onClick={this.clearErrors()} to="/login">Already have an account? Log in here.</Link>;
     }
   }


  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return(
      <div className="front-page">

        <div className="header">
          <img className="logo" src="https://s3-us-west-1.amazonaws.com/deirdrehydeappacademy/Refresh.png"/>
          <h1>Playlisty</h1>
        </div>
        <div className="flex-grid">
          <form className="login" onSubmit={this.handleSubmit}>
            <div className="welcome">
              {this.props.formType === 'Login' ? "Please login to access your playlists" : "Create your free Playlisty account"}
            </div>
            { this.renderErrors() }
            <br/>
            <br/>
            <div className="login-form">
              <label>Username:
                <br/>
                <input type="text"
                  placeholder="Playlisty usename"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  />
              </label>
              <br/>
              <label>Password:
                <br/>
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  />
              </label>
            </div>
            <input type="submit" value={this.props.formType === 'Login' ? 'Login' : 'Sign Up'} />
            <button className="guest" onClick={this.loginGuest}>Guest Login</button>
            <div className="nav-link">
              {this.navLink()}
            </div>
          </form>

          <form className="info-text">
            <h1 className="info">Get the right music, right now</h1>
            <h2>Listen to millions of songs for free.</h2>
            <ul className="info-list">
              <li>Search and discover music you'll love</li>
              <li>Create playlists of your favorite music</li>
            </ul>
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);
