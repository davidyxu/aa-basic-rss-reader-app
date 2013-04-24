class Entry < ActiveRecord::Base
  belongs_to :feed
  attr_accessible :comments, :description, :guid, :link, :pubDate, :title, :feed_id
end
