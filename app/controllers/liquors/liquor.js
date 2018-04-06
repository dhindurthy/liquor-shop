import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{

		submitComment: function(id){
			var message = this.get('message');
			let liquor = this.get('store').peekRecord('liquor', id);
			var id_new = Math.random().toString(30).substr(2, 7);
			let comment = this.get('store').createRecord('comment', {
				"id": id_new,
				"message": message
			});
			liquor.get('comments').pushObject(comment);
			comment.save().then(function () {
				liquor.save();
			});

			this.set('message','');
		},

		removeComment: function(commentId){
			alert(commentId);
			this.get('store').findRecord('comment', commentId).then(function(comment) {
			  comment.deleteRecord();
			  comment.get('isDeleted');
			  comment.save();
			});
		}
	}
	
});
