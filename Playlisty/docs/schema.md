# Database Schema

## users
| Column name     | Data type | Details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed         |

## playlists
| Column name | Data type | Details                                           |
|-------------|-----------|---------------------------------------------------|
| id          | integer   | not null, primary key                             |
| name        | string    | not null                                          |
| creator_id  | integer   | not null, foreign_key (references users), indexed |

## songs
| Column name | Data type | Details                                             |
|-------------|-----------|-----------------------------------------------------|
| id          | integer   | not null, primary key                               |
| title       | string    | not null                                            |
| artist_id   | integer   | not null, foreign_key (references artists), indexed |
| album_id    | integer   | not null, foreign_key (references albums), indexed  |
| duration    | integer   | not null                                            |
| album_ord   | integer   | not null                                            |


## playlist_songs
| Column name | Data type | Details                                               |
|-------------|-----------|-------------------------------------------------------|
| id          | integer   | not null, primary key                                 |
| playlist_id | integer   | not null, foreign_key (references playlists), indexed |
| song_id     | integer   | not null, foreign_key (references songs), indexed     |
| ord         | integer   | not null                                              |

## albums
| Column name | Data type | Details                                             |
|-------------|-----------|-----------------------------------------------------|
| id          | integer   | not null, primary key                               |
| title       | string    | not null                                            |
| artist_id   | integer   | not null, foreign_key (references artists), indexed |
| year        | integer   | not null                                            |
| image_url   | string    | not null                                            |

## artists
| Column name | Data type | Details                                 |
|-------------|-----------|-----------------------------------------|
| id          | integer   | not null, primary key                   |
| name        | string    | not null                                |
| description | string    | not null                                |
| image_url   | string    | not null                                |
