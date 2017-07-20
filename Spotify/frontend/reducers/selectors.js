import values from 'lodash/values';

export const allPlaylists = ({ playlists }) => values(playlists);

export const selectPlaylist = ({playlists}, id) => {
   const playlist = playlists[id] || {};
   console.log(playlist);
   return playlist
};
