class Tag < ApplicationRecord
  paginates_per 50
  validates :text, length: {minimum: 1, maximum: 100}
  has_many :quote_tags, dependent: :destroy
  has_many :quotes, through: :quote_tags
  def self.find_or_create(q)
    tag = find_by(q)
    tag ? tag : create(q)
  end
end
