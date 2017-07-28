class Follow < ApplicationRecord

  belongs_to :followed_playlist,
    class_name: "Playlist",
    primary_key: :id,
    foreign_key: :playlist_id

  belongs_to :follower,
    class_name: "User",
    primary_key: :id,
    foreign_key: :follower_id

  validates :playlist_id, :follower_id, presence: true
  validates :playlist_id, uniqueness: { scope: :follower_id }
end
