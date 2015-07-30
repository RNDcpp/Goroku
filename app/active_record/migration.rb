require File.expand_path('../active_record_base',__FILE__)
class Ctable < ActiveRecord::Migration
public
  def self.change
    create_table :category do |t|
      t.column :name, :text
    end
    create_table :goroku do |t|
      t.column :content, :text
      t.column :ruby, :text
      t.references :category
    end
  end
end
Ctable.change
