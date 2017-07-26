class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
  end

  def index
    if params[:playlist_id]
      @songs = Song.where(playlist_id: params[:playlist_id])
    elsif params[:title]
      title = params[:title]
      @songs = Song.where('lower(title) LIKE ?', title.downcase)
    else
      @songs = Song.all
    end
  end
end
