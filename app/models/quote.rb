class Quote < ApplicationRecord
  validates :text, length: {minimum: 1, maximum: 400}
  has_many :quote_tags
  has_many :tags, through: :quote_tags
end
