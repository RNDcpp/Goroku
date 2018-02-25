class QuoteController < ApplicationController
  before_action :check_text, only: [:create, :update]
  before_action :check_id, only: [:show, :delete]
  before_action :get_quote, only: [:show, :delete]
  def index
    #ActiveModel::CollectionSerializer.new(@quotes, serializer: QuoteSerializer, include: {tags: [:tags] }).as_json
    @quotes=Quote.all.page(params[:page])
    render json: @quotes, include: {tags: [:id, :text]}
  end

  def show
    render json: @quote, include: {tags: [:id, :text]}
  end

  def create
    quote=Quote.new
    quote.text=params[:text]
    if quote.save
      render json: quote, status: :created
    else
      render json: quote, status: :bad_request
    end
  end

  def update
    quote=Quote.new
    quote.text=params[:text]
    if quote.save
      render json: quote, status: :ok
    else
      render json: quote, status: :bad_request
    end
  end

  def delete
    @quote.destroy
  end
  private
  def get_quote()
    @quote=Quote.find(params[:id])
  end
  def check_id
    params.require(:id)
  end
  def check_text
    params.require(:text)
  end
end
