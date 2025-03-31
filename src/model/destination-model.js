import AbstractModel from './abstract-model';

export default class DestinationModel extends AbstractModel {
  #destinations = null;

  constructor(service) {
    super(service);
    this.#destinations = this._service.destinations;
  }

  get destinations() {
    return this.#destinations;
  }

  getDestinationById(id) {
    return this.#destinations.find((d) => d.id === id);
  }
}
