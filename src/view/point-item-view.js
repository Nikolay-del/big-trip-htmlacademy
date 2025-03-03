import { createElement } from '../render';
import { formatDateToMonthDay, formatDateToTime, formatDurationDifference } from '../utils';
import { getPointOffers } from '../mock/offer';

function createOffersList(offers) {
  if (offers.length === 0) {
    return '';
  }

  const offersMarkup = getPointOffers(offers)
    .map(({title, price}) => `<li class="event__offer">
         <span class="event__offer-title">${title}</span>
         &plus;&euro;&nbsp;
         <span class="event__offer-price">${price}</span>
      </li>`)
    .join('');

  return `<ul class="event__selected-offers">${offersMarkup}</ul>`;
}


function createPointItemTemplate({type, basePrice, dateFrom, dateTo, isFavorite, offers}) {
  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';
  return (
    `
    <li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${formatDateToMonthDay(dateFrom)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} Amsterdam</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="2019-03-18T10:30">${formatDateToTime(dateFrom)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="2019-03-18T11:00">${formatDateToTime(dateTo)}</time>
                  </p>
                  <p class="event__duration">${formatDurationDifference(dateFrom, dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                ${createOffersList(offers)}
                <button class="event__favorite-btn ${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
    `
  );
}

export default class PointItemView {
  constructor({point}) {
    this.point = point;
  }

  getTemplate() {
    return createPointItemTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
