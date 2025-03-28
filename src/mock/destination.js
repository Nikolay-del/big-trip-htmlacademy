import {getRandomArrayElement, getRandomInteger} from '../utils';
import {CITIES, DESCRIPTION, MAX_PICTURES} from './const';

function generateDestination() {
  return {
    id: crypto.randomUUID(),
    name: getRandomArrayElement(CITIES),
    description: DESCRIPTION,
    pictures: Array.from({ length: getRandomInteger(0, MAX_PICTURES)}, generatePicture)
  };
}

function generatePicture() {
  return {
    src: `http://picsum.photos/300/200?r=${crypto.randomUUID()}`,
    description: DESCRIPTION,
  };
}

export {generateDestination};
