# json.extract! @playlist, :id, :name, :creator_id
json.id @playlist.id
json.name @playlist.name
json.creator @playlist.user.username
