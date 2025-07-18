class Api::V2::VideosController < ApplicationController
  include Rails.application.routes.url_helpers

  def index
    videos = Video.ransack(params[:q]).result(distinct: true).with_attached_file
    render json: videos.map { |video| format_video(video) }
  end



  def show
    video = Video.find(params[:id])
    render json: format_video(video)
  end

  def create
    video = Video.new(video_params)
    if video.save
      render json: format_video(video), status: :created
    else
      render json: { errors: video.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.permit(:title, :description, :file)
  end

  def format_video(video)
    {
      id: video.id,
      title: video.title,
      description: video.description,
      video_url: url_for(video.file),
      created_at: video.created_at
    }
  end
end
