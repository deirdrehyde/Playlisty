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
    console.log(this.props);
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
    const user = { username: "guest", password: "password" };
    this.props.formType = 'login';
    this.props.processForm(user);

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
    console.log(this.props);
    return(
      <div className="flex-grid">
        <form className="login" onSubmit={this.handleSubmit}>
          <h2 className="welcome">
            {this.props.formType === 'Login' ? "Please login to access your playlists" : "Create your free Playlisty account"}
          </h2>
          { this.renderErrors() }
          <br/>
          <br/>
          <div className="login-form">
            <label>Username:
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            <br/>
            <label>Password:
              <br/>
              <input type="password"
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
    )
  }
}

export default withRouter(SessionForm);
