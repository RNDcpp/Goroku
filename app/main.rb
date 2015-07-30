require File.expand_path('../model_file',__FILE__)
require 'sinatra'
class Controller < Sinatra::Base
public
  get '/' do
    erb :index
  end
end
Controller.run!
