# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create!(username: "Guest", password: "password")
guest1 = User.create!(username: "Playlisty", password: "password123!")
playlist1 = Playlist.create!(name: "Top Hits", creator_id: guest1.id)
playlist2 = Playlist.create!(name: "Classic Rock", creator_id: guest1.id)
playlist3 = Playlist.create!(name: "Hip Hop", creator_id: guest1.id)
playlist4 = Playlist.create!(name: "Beach Vibes", creator_id: guest1.id)
playlist5 = Playlist.create!(name: "Hot Country", creator_id: guest1.id)
playlist6 = Playlist.create!(name: "Bluegrass", creator_id: guest1.id)
playlist7 = Playlist.create!(name: "Classical", creator_id: guest1.id)
playlist8 = Playlist.create!(name: "Jazz", creator_id: guest1.id)

artist1 = Artist.create!(name: "The Best Artist", description: "Self-taught musician from San Francisco, CA who names Prince as his inspiration")
Song.create!(title: "Blind Love Dub", duration: 300, song_url: "https://s3-us-west-1.amazonaws.com/deirdrehydeappacademy/VJ_Memes_-_Blind_Love_Dub_htjplp.mp3", playlist_id: playlist1.id, artist_id: artist1.id)
Song.create!(title: "Seagulls", duration: 25, song_url: "https://s3-us-west-1.amazonaws.com/deirdrehydeappacademy/397915__klankbeeld__coast-seagull-ship-170512-1140.wav", playlist_id: playlist1.id, artist_id: artist1.id)
