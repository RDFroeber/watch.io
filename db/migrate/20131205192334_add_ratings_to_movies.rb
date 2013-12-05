class AddRatingsToMovies < ActiveRecord::Migration
  def change
    add_column :movies, :seen, :boolean, default: false
    add_column :movies, :rating, :integer
  end
end
