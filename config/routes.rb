# Rails.application.routes.draw do
#   devise_for :users
#   # devise_for :users
#   root 'groups#index'
#   root 'users#index'
#   resources :users, only: [:index, :edit, :update]
#   resources :groups, only: [:index, :new, :create, :edit, :update]do
#   resources :messages, only: [:index, :create,:edit]
#   get '/edit/:id', to: 'edit#user', as: :edit_user
#   end
# end
Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  # :indexを追記
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end