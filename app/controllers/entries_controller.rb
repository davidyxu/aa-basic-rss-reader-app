require 'open-uri'
class EntriesController < ApplicationController
	respond_to :json

	def index
		feed = Feed.find(params[:feed_id])
		render :json => Feed.find(params[:feed_id]).entries
	end

	def show
		render :json => Feed.find(params[:feed_id]).latest_entry
	end
end
