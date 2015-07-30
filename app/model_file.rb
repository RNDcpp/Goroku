require File.expand_path('../active_record/active_record_base',__FILE__)
class Category < ActiveRecord::Base
  self.table_name = 'category'  
end
class Goroku < ActiveRecord::Base
  self.table_name = 'goroku'  
  belongs_to :categories
end
