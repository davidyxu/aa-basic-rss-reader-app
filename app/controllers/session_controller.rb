class SessionController < ApplicationController
	def new
		render :new
	end

	def create
		puts "UGHUGDS"
		@user = User.find_by_name(params[:session][:name])
		if @user && user.authenticate(params[:session][:password])
			session[:user_id] = @user.id
			redirect_to feeds_path
			puts "yay"
		else
			puts "boo"
			render "new"
		end
	end
end
