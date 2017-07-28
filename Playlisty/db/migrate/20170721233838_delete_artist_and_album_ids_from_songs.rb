class DeleteArtistAndAlbumIdsFromSongs < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :artist_id
    remove_column :songs, :album_id
    remove_column :songs, :album_ord

  end
end
