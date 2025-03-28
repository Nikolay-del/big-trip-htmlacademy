import {DESTINATION_COUNT, EVENT_TYPES, OFFER_COUNT, POINT_COUNT} from '../mock/const';
import {generateDestination} from '../mock/destination';
import {getRandomArrayElement, getRandomInteger} from '../utils';
import {generateOffer} from '../mock/offer';
import {generatePoint} from '../mock/point';

export default class MockService {
  points = [];
  offers = [];
  destinations = [];

  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  generateDestinations() {
    return Array.from({length: DESTINATION_COUNT}, generateDestination);
  }

  generateOffers() {
    return EVENT_TYPES.map((type) => ({
      type,
      offers: Array.from({length: getRandomInteger(0, OFFER_COUNT)}, () => generateOffer(type)),
    }));
  }

  generatePoints() {
    return Array.from({length: POINT_COUNT}, () => {
      const type = getRandomArrayElement(EVENT_TYPES);
      const destination = getRandomArrayElement(this.destinations);
      const offersId = this.offers
        .find((offer) => offer.type === type)
        .offers.map((item) => item.id);

      return generatePoint(type, destination.id, offersId);
    });
  }
}
