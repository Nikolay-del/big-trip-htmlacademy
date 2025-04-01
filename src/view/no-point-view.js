import AbstractView from '../framework/view/abstract-view';
import {FilterType} from '../const';

const emptyStateMessages = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now'
};

function createNoPointView(text) {
  return `<p class="trip-events__msg">${text}</p>`;
}

export default class NoPointView extends AbstractView {
  #emptyStateMessage = null;

  constructor({typeFilter}) {
    super();

    this.#emptyStateMessage = emptyStateMessages[typeFilter];
  }

  get template() {
    return createNoPointView(this.#emptyStateMessage);
  }
}
