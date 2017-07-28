class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :duration, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
      t.integer :album_ord, null: false
      t.string :song_url, null: false
      t.timestamps
    end
    add_index :songs, :artist_id
    add_index :songs, :album_id
  end
end
