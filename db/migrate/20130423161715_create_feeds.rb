class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.text :title
      t.text :source

      t.timestamps
    end
  end
end
