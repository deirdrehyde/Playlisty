class Api::PlaylistsController < ApplicationController
  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)
    @playlist.creator_id = current_user.id
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = find(params[:id])
  end

  def edit
    @playlist = find(params[:id])
  end

  def update
    @playlist = find(params[:id])
    if @playlist.update_attributes(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def destory
    @playlist = find(params[:id])
    @playlist.destroy
    render :index
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end

end
