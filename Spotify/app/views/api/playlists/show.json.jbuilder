# json.extract! @playlist, :id, :name, :creator_id
# followed = @playlist.followers.where(follower_id: current_user.id)
followed = Follow.find_by(follower_id: current_user.id, playlist_id: @playlist.id)

json.id @playlist.id
json.name @playlist.name
json.creator @playlist.user.username
json.followed followed ? true : false
json.follow_id followed ? followed.id : 0
