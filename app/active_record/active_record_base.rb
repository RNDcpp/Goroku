#cording: utf-8
require 'active_record'
require 'pp'
require 'yaml'
config = YAML.load_file(File.expand_path('../../../config/database.yml',__FILE__))
config[ENV["GOROKU_ENV"]]["database"] = File.expand_path("../../db/#{config[ENV["GOROKU_ENV"]]["database"]}",__FILE__)
ActiveRecord::Base.establish_connection(config[ENV["GOROKU_ENV"]])

