require 'open-uri'

class Feed < ActiveRecord::Base
  attr_accessible :source, :title

  has_many :entries
  
  def update
  	new_entries = SimpleRSS.parse(open(self.source)).entries

		old_entry_guids = self.entries.map { |entry| entry.guid }
		puts old_entry_guids
		new_entries.each do |entry|
			puts entry[:guid]
			if !old_entry_guids.include?(entry[:guid])
        entry.select!{|k, v| Entry.accessible_attributes.include?(k.to_s)}
				Entry.create!(entry.merge({feed_id: id}))
			end
		end
  end

  def latest_entry
  	self.update
  	return self.entries.last
  end
end
