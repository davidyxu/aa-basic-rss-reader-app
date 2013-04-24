class ChangePubDate < ActiveRecord::Migration
  def up
  	add_column :entries, :pubDate, :text
  	remove_column :entries, :pub_date
  end

  def down
  	remove_column :entries, :pubDate, :text
  	add_column :entries, :pub_date
  end
end
