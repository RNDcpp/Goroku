Rails.application.routes.draw do
  post 'quote_tag', to: 'quote_tag#create'

  get 'tag', to: 'tag#index'

  get 'tag/:id', to: 'tag#show'

  post 'tag', to: 'tag#create'

  put 'tag', to: 'tag#update'

  delete 'tag/:id', to: 'tag#delete'

  get 'quote', to: 'quote#index'

  get 'quote/:id', to: 'quote#show'

  post 'quote', to: 'quote#create'

  put 'quote', to: 'quote#update'

  delete 'quote/:id', to: 'quote#delete'

  get 'view/*path', to: 'home#index'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
