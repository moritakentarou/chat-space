Rails.application.routes.draw do
<<<<<<< Updated upstream
=======
  devise_for :users
>>>>>>> Stashed changes
  root 'messages#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update]
end