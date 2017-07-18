import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink() {
     if (this.props.formType === 'login') {
       return <Link to="/signup">sign up instead</Link>;
     } else {
       return <Link to="/login">log in instead</Link>;
     }
   }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome to Spotify!</h1>
          <br/>
          Please {this.props.formType} or {this.navLink()}
        </form>

      </div>
    )
  }
}

export default SessionForm;
