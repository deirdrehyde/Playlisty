export const fetchMatchingSongs = (title) => {
  return $.ajax({
    method: 'GET',
    url: `api/songs?title=${title}`
  })
}
export const fetchMatchingPlaylists = (name) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists?name=${name}`
  })
}
export const fetchMatchingArtists = (name) => {
  return $.ajax({
    method: 'GET',
    url: `api/artists?name=${name}`
  })
}
