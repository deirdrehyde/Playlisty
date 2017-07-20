import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {fetchPlaylists, createPlaylist} from './actions/playlist_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
}

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPlaylists = fetchPlaylists;
  window.createPlaylist = createPlaylist;


  const root = document.getElementById("root")
  ReactDOM.render(<Root store={store}/>, root)
})
