class Tag < ApplicationRecord
  validates :text, length: {minimum: 1, maximum: 100}
  has_many :quote_tags
  has_many :quotes, through: :quote_tags
end
