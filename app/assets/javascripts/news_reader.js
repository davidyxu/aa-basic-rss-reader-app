window.NR = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	Store: {},

	initialize: function($side, $main, feedsData, entriesData){
		NR.Store.Feeds = new NR.Collections.Feeds(feedsData);
		NR.Store.Entries = new NR.Collections.Entries(entriesData);
		
		new NR.Routers.FeedsRouter($main);
		this.installSidebar($side);

		Backbone.history.start();
	},

	installSidebar: function($side) {
		var that = this;

		var feedsList = new NR.Views.FeedsIndexView({
			collection: NR.Store.Feeds
		});
		$side.html(feedsList.render().$el);
	}

};