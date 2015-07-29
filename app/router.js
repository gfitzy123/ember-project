import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('employees', { path: '/' });
  this.resource('dashboard', { path: '/dashboard' });
});

export default Router;
