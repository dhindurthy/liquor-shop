import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['ls-datalist'],
  change: function(obj){
  	let params = {};
  	params.value = obj.target.value;
  	params.datalist = this.get('datalist');
   	this.sendAction('on-change', params);
  }
});
