class TagController < ApplicationController
  before_action :check_text, only: [:create, :update]
  before_action :check_id, only: [:show, :delete]
  before_action :get_tag, only: [:show, :delete]
  def index
    @tags=Tag.all.page(params[:page])
    render json: @tags, include: {quotes: [:id, :text, :tags]}
  end

  def show
    render json: @tag, include: {quotes: [:id, :text, :tags]}
  end

  def create
    tag=Tag.new
    tag.text=params[:text]
    if tag.save
      render json: tag, status: :created
    else
      render json: tag, status: :bad_request
    end
  end

  def update
    tag=Tag.new
    tag.text=params[:text]
    if tag.save
      render json: tag, status: :ok
    else
      render json: tag, status: :bad_request
    end
  end

  def delete
    @tag.destroy
  end
  private
  def get_tag()
    @tag=Tag.find(params[:id])
  end
  def check_id
    params.require(:id)
  end
  def check_text
    params.require(:text)
  end
end
