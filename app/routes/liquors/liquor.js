import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		console.log(params.liquor_id);
		var id = params.liquor_id;
		return this.get('store').findRecord('liquor',id,{include:'comments,tags'});
	}
});
