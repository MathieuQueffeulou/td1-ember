import EmberRouter from '@ember/routing/router';
import config from 'td1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('testNew');
  this.route('testList');
  this.route('categories', function() {
    this.route('add');
    this.route('update', {path: '/contact/:category_id'});
    this.route('contacts', {path: '/contact/:category_id'}, function() {
      this.route('add');
      this.route('update', {path: '/categories/:contact_id'});
    });
  });
});
