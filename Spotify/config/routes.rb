Rails.application.routes.draw do


  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :songs, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :playlists
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
