class Subscription < ActiveRecord::Base
	attr_accessible :feed_id, :user_id
  belongs_to :feed
  belongs_to :user
  # attr_accessible :title, :body
end
