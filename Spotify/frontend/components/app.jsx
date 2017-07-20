import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import PlaylistShowContainer from './playlists/playlist_show_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

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
      <ProtectedRoute path='/playlists' component={PlaylistIndexContainer} />
      <ProtectedRoute path='/playlists/:id' component={PlaylistIndexContainer} />
      <AuthRoute path='/' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
