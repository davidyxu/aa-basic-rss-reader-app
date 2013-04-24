NR.Collections.FeedEntries = Backbone.Collection.extend({
	url: function() {
		// return '/feeds/' + this.id + '/entries';
		return '/feeds/' + this.feed.id + '/entries';
	},
	model: NR.Models.Entry,
	initialize: function(models, options) {
		this.feed = options.feed;
		//this.id = options.id;
	}
});