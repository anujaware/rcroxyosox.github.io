define([
	'jquery',
	'backbone',
	'handlebars',
	'text!/html/RoundsHistoryView.html',
	'css!/css/RoundsHistoryView.css'
	], function(
		$,
		Backbone,
		Handlebars,
		html
		) {

		return Backbone.View.extend({
			tagName  : "div",
			className: 'RoundsHistoryView',
			events   : {},
			template: Handlebars.compile(html),
			initialize: function(options){
				_.extend(this, options);
			},
			render: function() {
				this.$el.html(this.template({}));
				return this;
			}
		});
	}
);