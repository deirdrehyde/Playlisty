class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :playlist_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end
    add_index :follows, :playlist_id
    add_index :follows, :follower_id
    add_index :follows, [:playlist_id, :follower_id], unique: true
  end
end
