NR.Views.EntryView = Backbone.View.extend({
	events: {
		"click button.submit": "submit"
	},

	render: function() {
		var that = this;
		var keys = [];
		for (var k in that.model.attributes) keys.push(k);

		var renderedContent = JST["feeds/detail"]({
			entry: that.model,
			keys: keys
		});
		that.$el.html(renderedContent);
		return that;
	},

	submit: function() {
		console.log("wokring");
	}
});