class AddPlaylistIdToSong < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :playlist_id, :integer, null: false
    add_index :songs, :playlist_id
  end
end
