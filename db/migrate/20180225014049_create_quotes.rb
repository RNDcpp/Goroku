class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.string :text, :null => false, :limit => 400

      t.timestamps
    end
  end
end
