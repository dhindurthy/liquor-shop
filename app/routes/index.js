import Ember from 'ember';

export default Ember.Route.extend({
	// beforeModel() {
	//     this.replaceWith('liquors');
 //  	}
 	model: function(){
		return this.get('store').findAll('liquor',{include:'comments'});
	}
});
