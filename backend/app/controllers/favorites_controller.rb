class FavoritesController < ApplicationController
  def index
    favorites = Favorite.order("created_at DESC")
    render json: favorites
  end

  def create
    favorite = Favorite.create(favorite_param)
    render json: favorite
  end

  def update
    favorite = Favorite.find(params[:id])
    favorite.update_attributes(favorite_param)
    render json: favorite
  end

  def destroy
    favorite = Favorite.find_by_breed_id(params[:id])
    favorite.destroy
    head :no_content, status: :ok
  end
  
  private
    def favorite_param
      params.require(:favorite).permit(:breed_id, :name, :image_url)
    end
end
