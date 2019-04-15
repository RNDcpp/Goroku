class AddDeletedAtToQuote < ActiveRecord::Migration[5.1]
  def change
    add_column :quotes, :deleted_at, :datetime,:null => true, :default => nil
  end
end
