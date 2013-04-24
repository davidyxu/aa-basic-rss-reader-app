// NR.Models.Feed = Backbone.Model.extend({
// 	urlRoot: "/feeds"
// });

NR.Models.Feed = Backbone.RelationalModel.extend({
	urlRoot: "/feeds",
	relations: [{
		type: Backbone.HasMany,
		key: "entries",
		relatedModel: "NR.Models.Entry",
		collectionType: "NR.Collections.FeedEntries",
		reverseRelation: {
			key: "feed",
			key_source: "feed_id"
		}
	}]
});