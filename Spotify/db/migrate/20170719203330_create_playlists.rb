class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end
    add_index :playlists, :creator_id, unique: true
  end
end
