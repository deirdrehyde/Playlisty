# API Endpoints

## HTML API
#### Root
  - `GET /` (loads React web app)

## JSON API
#### Users
  - `POST /api/users`

#### Session
  - `POST /api/session`
  - `DELETE /api/session`

#### Playlists
  - `GET /api/playlists`
  - `POST /api/playlists`
  - `PATCH /api/playlists/:id`
  - `DELETE /api/playlists/:id`

#### Songs
  - `GET /api/songs`

#### Artists
  - `GET /api/artists`

#### Albums
  - `GET /api/albums`

#### PlaylistFollows
  - `POST /api/playlistfollows`
  - `DELETE /api/playlistfollows/:id`

#### ArtistFollows
  - `POST /api/artistfollows`
  - `DELETE /api/artistfollows/:id`

#### Search
  - `POST /api/search/playlists`
  - `POST /api/search/artists`
  - `POST /api/search/albums`
  - `POST /api/search/songs`
