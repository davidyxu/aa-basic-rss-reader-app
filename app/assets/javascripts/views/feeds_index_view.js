NR.Views.FeedsIndexView = Backbone.View.extend ({
	initialize: function() {
		var that = this;
		var renderCallback = that.render.bind(that);

		that.collection.on("add", renderCallback);
	},

	render: function() {
		var that = this;

		var renderedContent = JST["feeds/index"]({
			feeds: that.collection
		});
		that.$el.html(renderedContent);
		return that;
	}
});