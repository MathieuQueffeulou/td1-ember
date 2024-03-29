import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class BoardRoute extends Abstractroute {
  model() {
    this.redirect();
    let user = this.userAuth.user;
    console.long(user.name);
    if (user) {
      return this.store.query('order',{filter: {idEmployee: user.id}})
      .then((resultat) => {
        return resultat;
      })
    }
  }

  @action
  logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }

  @action
  goStore() {
    this.transitionTo('section');
  }

}
