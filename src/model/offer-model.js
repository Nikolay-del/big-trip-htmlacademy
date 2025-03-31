import AbstractModel from './abstract-model';

export default class OfferModel extends AbstractModel {
  #offers = null;

  constructor(service) {
    super(service);
    this.#offers = this._service.offers;
  }

  get offers() {
    return this.#offers;
  }

  getOfferByType(type) {
    return this.#offers.find((offer) => offer.type === type).offers;
  }
}
