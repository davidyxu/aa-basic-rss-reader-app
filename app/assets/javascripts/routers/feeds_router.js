NR.Routers.FeedsRouter = Backbone.Router.extend({
	initialize: function($main) {
		this.$rootEl = $main;
	},

	routes: {
		"": "index",
		"feeds/new": "new",
		"feeds/:id": "show",
		"entries/:id": "details"
	},

	index: function() {
		var that = this;
	},

	new: function() {
		var that = this;
		var newFeedView = new NR.Views.NewFeedView();
		that.$rootEl.html(newFeedView.render().$el);
	},

	show: function(feed_id) {

		var that = this;
		var feed = NR.Store.Feeds.get(feed_id)
		var feedEntries = feed.attributes.entries
		//var feedEntries = new NR.Collections.FeedEntries([], {id: feed_id});

		feedEntries.fetch({
			success: function() {
				var feedView = new NR.Views.FeedView({
				 	collection: feedEntries,
				 	model: feed
				});
				that.$rootEl.html(feedView.render().$el);
			}
		});
	},

	details: function(entry_id) {
		var that = this;
		var entry = NR.Store.Entries.get({id: entry_id})
		var entryView = new NR.Views.EntryView({
			model: entry
		})
		that.$rootEl.html(entryView.render().$el);
	}
});