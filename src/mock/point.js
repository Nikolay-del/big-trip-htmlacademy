import {getRandomInteger} from '../utils';
import {Price} from './const';
import {getRandomDate} from './utils';


function generatePoint(type, destinationId, offersId) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dateFrom: getRandomDate({next: false}),
    dateTo: getRandomDate({next: true}),
    destination: destinationId,
    offers: offersId,
    isFavorite: getRandomInteger(0, 1),
    type: type
  };
}

export {generatePoint};
