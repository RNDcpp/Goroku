class QuoteController < ApplicationController
  before_action :check_text, only: [:create]
  before_action :check_id, only: [:show, :update, :delete]
  before_action :get_quote, only: [:show, :update, :delete]
  before_action :parse_tags, only: [:index]
  def index
    #ActiveModel::CollectionSerializer.new(@quotes, serializer: QuoteSerializer, include: {tags: [:tags] }).as_json
    @quotes = @tags ? Quote.tag_search_and(@tags,params[:page]) : Quote.all.page(params[:page])
    render json: {quotes: ActiveModel::Serializer::CollectionSerializer.new(
                          @quotes,
                          eachSerializer: QuoteSerializer,
                          include: {tags: [:id, :text]}),
                  next: @quotes.next_page,
                  last_page: @quotes.last_page?
                  }
  end

  def show
    render json: @quote, include: {tags: [:id, :text]}
  end

  def create
    quote=Quote.new
    quote.text=params[:text]
    if quote.save
      quote.append_tag_texts(params[:tags]) if check_tags
      render json: @quote, status: :created
    else
      render json: @quote, status: :bad_request
    end
  end

  def update
    @quote.text=params[:text] if check_text
    @quote.update_tag_texts(params[:tags]) if check_tags
    if @quote.save
      render json: @quote, status: :ok
    else
      render json: @quote, status: :bad_request
    end
  end

  def delete
    @quote.destroy
  end
  private
  def get_quote
    @quote=Quote.find(params[:id])
  end
  def check_id
    params.require(:id)
  end
  def check_text
    params.require(:text)
  end
  def check_tags
    params[:tags] && params[:tags].is_a?(Array)
  end
  def parse_tags
    @tags = params[:tags] ? params[:tags].split(" ") : nil
  end
end
