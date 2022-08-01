Rails.application.routes.draw do
  root to: 'pages#home'

  get '/contact', to: 'pages#contact', as: :contact

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
