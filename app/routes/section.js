import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import { action } from '@ember/object';


export default class SectionRoute extends Abstractroute {
  model() {
    this.redirect();
  }


  @action
  logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }

  @action
  goBoard() {
    this.transitionTo('board');
  }


  @action
  addProduct() {

  }


  @action
  addProduct() {

  }


}
