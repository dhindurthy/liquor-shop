import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{

		submitComment: function(id){
			var message = this.get('message');
			let liquor =this.get('store').peekRecord('liquor', id);
			var random = Math.random().toString(36).substr(2, 9);
			let comment = this.get('store').createRecord('comment', {
				"id": random,
				"message": message
			});
			liquor.get('comments').pushObject(comment);
			comment.save().then(function () {
				liquor.save();
			});

			this.set('message','');
		}
	}
	
});
