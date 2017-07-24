# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(username: "Guest", password: "password")
guest1 = User.create(username: "Playlisty", password: "password123!")
playlist1 = Playlist.create(name: "Top Hits", creator_id: 1)
playlist2 = Playlist.create(name: "Classic Rock", creator_id: 1)
playlist3 = Playlist.create(name: "Hip Hop", creator_id: 2)
playlist4 = Playlist.create(name: "Beach Vibes", creator_id: 2)
playlist5 = Playlist.create(name: "Hot Country", creator_id: 2)
playlist6 = Playlist.create(name: "Bluegrass", creator_id: 2)
playlist7 = Playlist.create(name: "Classical", creator_id: 2)
playlist8 = Playlist.create(name: "Jazz", creator_id: 2)
