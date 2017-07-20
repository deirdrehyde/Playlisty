export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists/${id}'
  })
}
