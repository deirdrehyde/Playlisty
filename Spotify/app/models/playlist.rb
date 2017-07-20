class Playlist < ApplicationRecord
  validates :creator_id, :name, presence: true

  belongs_to :user, foreign_key: :creator_id

end
