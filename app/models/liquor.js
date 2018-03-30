import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	brand: DS.attr('string'),
	comments: DS.hasMany('comment')
});
