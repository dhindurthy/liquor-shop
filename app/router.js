import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('liquors', function() {
    this.route('liquor', { path: '/:liquor_id' });
    this.route('add-liquor');
  });
  this.route('tags');
});

export default Router;
