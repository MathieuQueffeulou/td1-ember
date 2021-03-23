import EmberRouter from '@ember/routing/router';
import config from 'td1/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('section', function() {
    this.route('add');
    this.route('addProduct');
  });
  this.route('index');
  this.route('Abstractroute');
});
