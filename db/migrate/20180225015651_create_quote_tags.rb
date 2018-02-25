class CreateQuoteTags < ActiveRecord::Migration[5.1]
  def change
    create_table :quote_tags do |t|
      t.references :tag, foreign_key: true
      t.references :quote, foreign_key: true

      t.timestamps
    end
  end
end
