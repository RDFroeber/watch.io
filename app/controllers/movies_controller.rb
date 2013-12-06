class MoviesController < ApplicationController
  def index
  end

  def search
    encoded = URI.encode(params[:title])
    response = JSON(HTTParty.get("http://www.omdbapi.com/?s=#{encoded}"))
    # binding.pry

    response["Search"].each do |movie|
      movie["imdbID"]
    end
  end

end