export default class Services {
  services = [];

  constructor(serv) {
    this.services = serv;
  }

  get countActive() {
    return this.services.filterBy('active', true).length;
  }

  get sumActive() {

  }
}
