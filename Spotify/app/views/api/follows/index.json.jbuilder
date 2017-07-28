@follows.each do |follow|
  json.set! follow.id do
    json.id follow.playlist_id
    json.followed_playlist follow.followed_playlist
  end
end
