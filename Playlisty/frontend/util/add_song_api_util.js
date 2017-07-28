// 
// export const fetchPlaylistSongs = (playlist_id) => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/songs?playlist_id=${playlist_id}`
//   })
// }

export const addPlaylistSong = (song) => {
  return $.ajax({
    method: 'POST',
    url: `api/songs?playlist_id=${playlist_id}`
    data
  })
}
