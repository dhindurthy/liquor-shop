import Ember from 'ember';

export default Ember.Controller.extend({
	
	actions:{

		submitComment: function(id){
			var message = this.get('message');
			if(Ember.isPresent(message)){
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
			}

			this.set('message','');
		},

		removeComment: function(commentId){
			this.get('store').findRecord('comment', commentId).then(function(comment) {
			  comment.deleteRecord();
			  comment.get('isDeleted');
			  comment.save();
			});

			/**
			 *OR the below code works too
			 *	$E.store.findRecord('comment', 'comm12345-3').then(function(comment) {
			 *	  comment.destroyRecord();
			 *	});
			 * 
			 */
		},

		toggleModal:function(){
	    	this.set('isModalVisible', true);
	    	var datalist = this.get('store').findAll('tag');
			this.set('datalist', datalist);
	    },

	    closeModal: function(){
	    	this.set('isModalVisible', false);
	    },

		addTag: function(modelId){
			var tagName = this.get('tagName');
			if(Ember.isPresent(tagName)){
				let liquor = this.get('store').peekRecord('liquor', modelId);
				var id_new = Math.random().toString(30).substr(2, 7);
				let tag = this.get('store').createRecord('tag', {
					"id": id_new,
					"name":tagName
				});
				liquor.get('tags').pushObject(tag);
				tag.save().then(function () {
				  liquor.save();
				});
			}

			this.set('tagName',"");
		},

		removeTag: function(tagId){
			let model = this.get('model');
			let modelId = model.id;

			let liquor = this.get('store').peekRecord('liquor', modelId);
			let tag = this.get('store').peekRecord('tag', tagId);
			liquor.get('tags').removeObject(tag);
			tag.get('liquors').removeObject(liquor);
			liquor.save();
			tag.save();
			 
		},

		onChange: function(params){
			let model = this.get('model');
			let modelId = model.id;

			var tagName = params.value;
		  	var datalist = params.datalist;
		  	var tagId;
			datalist.map( function(item) {
				var obj = item.getProperties('name', 'id');
				if(obj.name===tagName){
					tagId = obj.id;
				}
			});
		  	
		    let liquor = this.get('store').peekRecord('liquor', modelId);
			let tag = this.get('store').peekRecord('tag', tagId);

			liquor.get('tags').then(function(tags){
			 return tags.pushObject(tag);
			});
			liquor.save();

			tag.get('liquors').then(function(liquors){
			 return liquors.pushObject(liquor);
			});
			tag.save();
	  	}
	}
	
});
