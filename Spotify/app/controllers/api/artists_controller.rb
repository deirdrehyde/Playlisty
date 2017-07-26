class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.find(params[:id])
  end

  def index
    if params[:name]
      name = params[:name]
      @artists = Artist.where('lower(name) LIKE ?', name.downcase)
    else
      @artists = Artist.all
    end
  end
end
