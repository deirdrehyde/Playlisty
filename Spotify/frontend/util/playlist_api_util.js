export const fetchPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists'
  })
}

export const fetchPlaylist = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists/${id}`
  })
}

export const createPlaylist = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlists',
    data
  })
}

export const updatePlaylist = (playlist) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/playlists/${playlist.id}`,
    data: { playlist }
  })
}

export const deletePlaylist = (playlist) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlists/${playlist.id}`
  })
}
