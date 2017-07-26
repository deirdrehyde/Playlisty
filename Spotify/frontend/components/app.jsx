import React from 'react';
import SessionFormContainer from './session/session_form_container';
import SongIndexContainer from './songs/song_index_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import PlaylistShowContainer from './playlists/playlist_show_container';
import SearchFormContainer from './search/search_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <Switch>
      <ProtectedRoute exact path='/search' component={SearchFormContainer} />
      <ProtectedRoute exact path='/songs' component={SongIndexContainer} />
      <ProtectedRoute exact path='/playlists' component={PlaylistIndexContainer} />
      <ProtectedRoute exact path='/playlists/:id' component={PlaylistShowContainer} />
      <AuthRoute path='/' component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </Switch>

  </div>
);

export default App;
