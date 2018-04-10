import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var modelObject = {};
		modelObject.liquors = this.get('store').findAll('liquor');
		modelObject.tags = this.get('store').findAll('tag');
		return modelObject;
	}
});
