export const fetchMatchingSongs = (playlist_id) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs?playlist_id=${playlist_id}`
  })
}
