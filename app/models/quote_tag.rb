class QuoteTag < ApplicationRecord
  belongs_to :tag
  counter_culture :tag, column_name: 'quotes_count', touch: true
  belongs_to :quote
end
