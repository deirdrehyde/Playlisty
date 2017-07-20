# json.partial! '/api/playlists/playlist', playlist: @playlist
json.playlists do
  json.extract! @playlist, :id, :name, :creator_id
end
