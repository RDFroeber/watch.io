WatchIo::Application.routes.draw do
  root 'movies#index'

  resources :movies do
    collection do
      get 'search'
    end
  end
  
end
