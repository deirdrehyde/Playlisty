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
playlist3 = Playlist.create(name: "Hip Hop", creator_id: 3)
playlist4 = Playlist.create(name: "Beach Vibes", creator_id: 4)
playlist5 = Playlist.create(name: "Hot Country", creator_id: 5)
playlist6 = Playlist.create(name: "Bluegrass", creator_id: 2)
playlist7 = Playlist.create(name: "Classical", creator_id: 2)
playlist8 = Playlist.create(name: "Jazz", creator_id: 2)

Artist.create(name: "The Best Artist")
Song.create(title: "Blind Love Dub", duration: 300, song_url: "http://res.cloudinary.com/douzdapki/video/upload/v1501009910/VJ_Memes_-_Blind_Love_Dub_htjplp.mp3", playlist_id: 1, artist_id: 1)
# Song.create(title: "Seagulls", duration: 25, song_url: "http://res.cloudinary.com/douzdapki/video/upload/v1500915412/397915__klankbeeld__coast-seagull-ship-170512-1140_rfe9cr.wav", playlist_id: 1, artist_id: 1)
