class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.string :text, :null => false, :limit => 100
      t.integer :quotes_count, default: 0
      t.timestamps
    end
  end
end
