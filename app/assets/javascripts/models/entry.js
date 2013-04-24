// NR.Models.Entry = Backbone.Model.extend({
// 	urlRoot: '/entries'
// });

NR.Models.Entry = Backbone.RelationalModel.extend({
	urlRoot: '/entries'
});