class RemoveCreatorIdUniqueConstraintFromIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index :playlists, :creator_id
    add_index :playlists, :creator_id
  end
end
