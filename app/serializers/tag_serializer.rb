class TagSerializer < ActiveModel::Serializer
  attributes :id, :text, :quotes_count
  has_many :quotes
end
