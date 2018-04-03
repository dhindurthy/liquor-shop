import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		gotoAdd: function(){
			this.transitionToRoute('liquors.add-liquor');
		}
	}
});
