export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/songs'
  })
}

export const fetchSong = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs/${id}`
  })
}

export const fetchPlaylistSongs = (playlist_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs?playlist_id=${playlist_id}`
  })
}
