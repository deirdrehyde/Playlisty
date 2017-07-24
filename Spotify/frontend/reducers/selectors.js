import values from 'lodash/values';

export const allPlaylists = ({ playlists }) => values(playlists);

export const allSongs = ({ songs }) => values(songs);

export const selectPlaylist = ({playlists}, id) => {
   const playlist = playlists[id] || {};
   return playlist
};
