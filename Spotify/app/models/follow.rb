class Follow < ApplicationRecord
  belongs_to :followed_playlist, class_name: "Playlist"
  belongs_to :follower, class_name: "User"

  validates :followed_playlist, :follower, presence: true
  validates :follower, uniqueness: { scope: :followed_playlist }
end
