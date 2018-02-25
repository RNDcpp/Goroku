class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_many :tags
end
