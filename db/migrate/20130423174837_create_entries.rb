class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.text :title
      t.text :link
      t.text :description
      t.text :comments
      t.text :pub_date
      t.text :guid
      t.references :feed

      t.timestamps
    end
    add_index :entries, :feed_id
  end
end
