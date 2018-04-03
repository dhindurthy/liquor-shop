import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addLiquor: function(){
			var liquorName = this.get('liquorName');
			var liquorBrand = this.get('liquorBrand');

			var id = Math.random().toString(30).substr(2, 7);
			let liquor = this.get('store').createRecord('liquor', {
				"id": id,
				"name": liquorName,
				"brand": liquorBrand
			});
			liquor.save();

			this.set('liquorName','');
			this.set('liquorBrand','');
		}
	}
});
