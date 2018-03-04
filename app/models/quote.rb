class Quote < ApplicationRecord
  paginates_per 50
  validates :text, length: {minimum: 1, maximum: 400}
  has_many :quote_tags, dependent: :destroy
  has_many :tags, through: :quote_tags
  def delete_tag_texts(tag_texts)
    tag_texts.each do |text|
      quote_tags.joins(:tag).find_by(tags: {text: text}).destroy
    end
  end
  def append_tag_texts(tag_texts)
    tag_texts.each do |text|
      QuoteTag.append_tag_text_to_quote(self,text)
    end
  end
  def update_tag_texts(tag_texts)
    tag_texts=tag_texts.to_set
    default_tag_texts=tags.pluck(:text).to_set
    tag_texts_new=tag_texts-default_tag_texts
    tag_texts_deleted=default_tag_texts-tag_texts
    append_tag_texts(tag_texts_new)
    delete_tag_texts(tag_texts_deleted)
  end
  def self.tag_search_and(tag_texts,page)
    Quote.joins(:tags).where(tags:{text:tag_texts}).group(:id).having('count(*) = ?',tag_texts.length).page(page)
  end
end
