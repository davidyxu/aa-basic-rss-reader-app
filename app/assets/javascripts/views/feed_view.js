NR.Views.FeedView = Backbone.View.extend({
	initialize: function() {
		var that = this;
		var renderCallback = that.render.bind(that);
		console.log(that.model);
		that.collection.on("add", renderCallback);
	},
	render: function() {
		var that = this;

		var renderedContent = JST["feeds/show"]({
			entries: that.collection
		});
		that.$el.html(renderedContent);
		return that;
	},

	events: {
		"click button.refresh": "refresh"
	},	
	
	refresh: function() {
		var that = this;
		console.log(this.collection);
		that.model.fetch({
			success: function() {
				that.collection.fetch();
			}
		});
	}
});