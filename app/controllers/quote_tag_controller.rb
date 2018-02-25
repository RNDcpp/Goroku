class QuoteTagController < ApplicationController
  before_action :req_params
  def create
    if qtag = QuoteTag.create({tag_id: params[:tag_id], quote_id: params[:quote_id]})
      render json: qtag, status: :created
    else
      render json: qtag, status: :bad_request
    end
  end
  private
  def req_params
    params.require(:tag_id)
    params.require(:quote_id)
  end
end
