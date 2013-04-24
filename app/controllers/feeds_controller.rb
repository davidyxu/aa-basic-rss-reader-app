require 'open-uri'

class FeedsController < ApplicationController
	respond_to :json
	respond_to :html, :only => [:index]

	def create
		@feed = Feed.new(params[:feed])
		if (@feed.save)
			render :json => @feed
		else
			render :json => @feed.errors, :status => 422
		end
	end

	def index
		@feeds = Feed.all

		respond_to do |format|
			format.json { render :json => @feeds }
			format.html { render :index }
		end
	end

	def show
		@feed = Feed.find(params[:id])
		@feed.update
		if @feed
			render :json => @feed
		else
			render :json => @feed.errors
		end
	end
end
