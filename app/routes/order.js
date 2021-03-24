import Route from '@ember/routing/route';
import { action } from '@ember/object';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';


export default class OrderRoute extends Abstractroute {

  model(param) {
    this.redirect();
    let user = this.userAuth.user;
    if (user) {
      console.log(user.name);
      return RSVP.hash({
        orders: this.store.findRecord('order', param.id, {include: 'orderdetail'}),
        employee: user,
      })
    }
  }  
}
