class MoviesController < ApplicationController
  def index
  end

  def search
  content_type :json
  encoded = URI.encode(params[:title])
  HTTParty.get("http://www.omdbapi.com/?s=#{encoded}").to_json
  end

end