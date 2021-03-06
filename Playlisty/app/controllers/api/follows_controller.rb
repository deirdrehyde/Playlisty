class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      @playlist = Playlist.find_by(id: @follow.playlist_id)
      render "api/playlists/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @follows = current_user.follows
    render "api/follows/index"
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy!
    @playlist = Playlist.find_by(id: @follow.playlist_id)
    render "api/playlists/show"
  end

  private

  def follow_params
    params.require(:follow).permit(:playlist_id)
  end
end
