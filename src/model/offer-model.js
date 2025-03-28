export default class OfferModel {
  constructor(service) {
    this.service = service;
    this.offers = service.getOffers();
  }

  getAllOffers() {
    return this.offers;
  }

  getOfferByType(type) {
    return this.offers.find((offer) => offer.type === type).offers;
  }
}
