# README

# Playlisty

[Playlisty](https://playlisty.herokuapp.com/) is a single-page, full-stack, music web application built using a React/Redux frontend, a Ruby on Rails backend, and a PostgreSQL database. Inspired by Spotify, Playlisty allows users to create, edit, and delete their own playlists, follow playlists created by other users, and search for new music all while continuously listening to their favorite songs.

## Features

- Robust authentication
- Navigate site while continuously playing music
- Create, update, and delete playlists
- Browse playists, songs, and artists
- View other users playlists and add them to your list of following playlists

### Authentication

Users' passwords are encrypted as a salted hash using BCrypt before being stored in the database. Salting a password prepends a random string the password so even users with duplicate passwords will not have the same hash stored in the backend.


### Follow Playlists

Browse through other users' playlists and add them to your own. Users can conveniently access all the playlists they've following on the main left navigation bar. Users can follow and unfollow playlists via a playlist view page.


![follow_playlist](/docs/images/follow_playlist.png)

### Search

Users can search to find all playlists, songs, and artists across the website. Search results are sorted into categories for easier navigation.

![search](/docs/images/search.png)


## Future

* [ ] Controls and buttons
* [ ] Shuffle play
* [ ] Explore page
* [ ] User follows
* [ ] Image uploads for profiles/playlists
* [ ] Play songs from Artist browse page
* [ ] Album browse pages
