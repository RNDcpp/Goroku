class QuoteTag < ApplicationRecord
  belongs_to :tag
  counter_culture :tag, column_name: 'quotes_count', touch: true
  belongs_to :quote
  def self.append_tag_text_to_quote(quote,tag_text)
    tag=Tag.find_or_create({text:tag_text})
    create(quote:quote,tag:tag)
  end
end
