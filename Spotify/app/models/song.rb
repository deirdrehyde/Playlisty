class Song < ApplicationRecord
  validates :title, :duration, :artist_id, :album_id, :album_ord, :song_url, :playlist_id, presence: true

  belongs_to :album
  belongs_to :artist

  belongs_to :playlist

end
