import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <div className="header">
        <img className="logo" src="http://res.cloudinary.com/douzdapki/image/upload/v1500486429/Refresh_xdfvbr.png"/>
        <h1>Playlisty</h1>
      </div>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path='/' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
