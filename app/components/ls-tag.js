import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['ls-tag'],

  attributeBindings:['tabindex:tabindex'],

  tabindex:0,

  	click: function(){
    	this.sendAction('removeTag', this.get('tagId'));
    },

  actions:{
  	
  }
});
