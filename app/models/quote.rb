class Quote < ApplicationRecord
  paginates_per 50
  validates :text, length: {minimum: 1, maximum: 400}
  has_many :quote_tags, dependent: :destroy
  has_many :tags, through: :quote_tags
end
