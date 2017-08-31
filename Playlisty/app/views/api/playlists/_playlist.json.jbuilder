followed = Follow.find_by(follower_id: current_user.id, playlist_id: playlist.id)

json.id playlist.id
json.name playlist.name
json.creator playlist.user.username
json.followed followed ? true : false
json.follow_id followed ? followed.id : 0
json.image_url asset_path(playlist.image.url)
