class Song < ApplicationRecord
  validates :title, :duration, :song_url, :playlist_id, presence: true


  belongs_to :playlist

end
