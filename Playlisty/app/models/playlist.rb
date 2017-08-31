# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :creator_id, :name, presence: true

  has_many :songs
  belongs_to :user, foreign_key: :creator_id
  has_many :follows,
    class_name: :Follow,
    foreign_key: :playlist_id,
    primary_key: :id
  has_many :followers, through: :follows, source: :follower


  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
