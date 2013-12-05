class Movie < ActiveRecord::Base
  validates :title, :picture_url, :plot, presence: true
end