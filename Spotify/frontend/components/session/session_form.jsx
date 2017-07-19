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

  navLink() {
     if (this.props.formType.name === 'login') {
       return <Link onClick={this.clearErrors()} to="/signup">Don't have an account? Sign up here!</Link>;
     } else {
       return <Link onClick={this.clearErrors()} to="/login">Already have an account? Log in here.</Link>;
     }
   }


  renderErrors() {
    return(
      <ul>
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
      <div id="wrapper">
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome to Spotify!</h1>
          <br/>
          Please {this.props.formType.name}
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
          <input type="submit" value={this.props.formType.name === 'login' ? 'Login' : 'Sign Up'} />
         {this.navLink()}
        </form>

      </div>
    )
  }
}

export default withRouter(SessionForm);
