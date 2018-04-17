import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var modelObject = {};
		modelObject.liquors = this.get('store').findAll('liquor');
		modelObject.tags = this.get('store').findAll('tag');
		/** Show a specific number of liquors and tags instead of all of them**/
		return modelObject;
	}
});
