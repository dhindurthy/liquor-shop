import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['ls-modal'],

  attributeBindings: ['tabindex:tabindex','role:role'],

  role:'dialog',

  tabindex:0,

  didInsertElement(){
  	this.$().children().first().focus();
  },

  keyDown: function(event){
		if(event.keyCode===9 ){
	      var nextElement  =this.$(document.activeElement).next().length;
	      if(!event.shiftKey && nextElement===0){
	        event.preventDefault();
	        this.$().children().first().focus();
	      }
	      var prevElement  =this.$(document.activeElement).prev().length;
	      if(event.shiftKey && prevElement===0){
	        event.preventDefault();
	        this.$().children().last().focus();
	      }
	    }
	    if(event.keyCode===27 ){
	    	this.sendAction('closeModal');
	    }
	},

  focusOut(event){},
  	didDestroyElement(){
  }
});
