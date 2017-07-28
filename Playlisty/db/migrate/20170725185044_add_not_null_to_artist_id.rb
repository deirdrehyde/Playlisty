class AddNotNullToArtistId < ActiveRecord::Migration[5.0]
  def change
    change_column_default :songs, :artist_id, 1
  end
end
