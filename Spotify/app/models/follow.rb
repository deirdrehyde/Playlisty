class Follow < ApplicationRecord
  belongs_to :followed_playlist, class_name: "Playlist", primary_key: :id, foreign_key: :playlist_id
  belongs_to :follower, class_name: "User", primary_key: :id, foreign_key: :follower_id

  validates :followed_playlist, :follower, presence: true
  validates :follower, uniqueness: { scope: :followed_playlist }
end
