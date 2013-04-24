NR.Views.NewFeedView = Backbone.View.extend({
	events: {
		"click button.submit": "submit"
	},

	render: function() {
		var that = this;
		var renderedContent = JST["feeds/new"]();
		that.$el.html(renderedContent);
		return that;
	},

	submit: function() {
		var that = this;
		var newFeed = new NR.Models.Feed({
			title: that.$("input[name=feed\\[title\\]]").val(),
			source: that.$("input[name=feed\\[source\\]]").val()
		});
		newFeed.save(null, {
			success: function() {
				NR.Store.Feeds.add(newFeed);
				Backbone.history.navigate("#/");
			}
		});
	}
});