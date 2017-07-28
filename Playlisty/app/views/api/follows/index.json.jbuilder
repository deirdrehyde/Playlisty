@follows.each do |follow|
  json.set! follow.playlist_id do
    json.partial! 'follow', follow: follow
  end
end
