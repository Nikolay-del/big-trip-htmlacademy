import { createElement } from '../render';
import { getTypeOffers } from '../mock/offer';
import { EVENT_TYPES } from '../const';

function createOffersList(type) {
  const offers = getTypeOffers(type);

  if (!offers.length) {
    return '';
  }

  const offersMarkup = offers
    .map(({id, title, price}) => `
        <div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}"
                 name="event-offer-${id}" type="checkbox">
          <label class="event__offer-label" for="event-offer-${id}">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </label>
        </div>
    `)
    .join('');

  return `
    <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${offersMarkup}
        </div>
    </section>
  `;
}

function createTypesList() {
  const typesMarkup = EVENT_TYPES.map((type) => `
      <div class="event__type-item">
          <input class="event__type-input  visually-hidden" id="event-type-${type}" name="event-type"
              type="radio" value="${type}">
          <label class="event__type-label  event__type-label--${type}"
              for="event-type-${type}" style="text-transform: capitalize">${type}</label>
      </div>
    `)
    .join('');

  return `
    <div class="event__type-list">
        <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
        </fieldset>
        ${typesMarkup}
    </div>
  `;
}

function createPointAddTemplate() {
  return (
    `
<li class="trip-events__item">
              <form action="#" class="event event--edit" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img alt="Event type icon" class="event__type-icon" height="17" src="img/icons/flight.png"
                           width="17">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    ${createTypesList()}
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      Flight
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" list="destination-list-1"
                           name="event-destination" type="text" value="Geneva">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" name="event-start-time"
                           type="text" value="19/03/19 00:00">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" name="event-end-time"
                           type="text" value="19/03/19 00:00">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" name="event-price" type="text"
                           value="">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  ${createOffersList('taxi')}

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern
                      tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has
                      views of dramatic Mont Blanc.</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        <img alt="Event photo" class="event__photo" src="img/photos/1.jpg">
                        <img alt="Event photo" class="event__photo" src="img/photos/2.jpg">
                        <img alt="Event photo" class="event__photo" src="img/photos/3.jpg">
                        <img alt="Event photo" class="event__photo" src="img/photos/4.jpg">
                        <img alt="Event photo" class="event__photo" src="img/photos/5.jpg">
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>
    `
  );
}

export default class PointAddView {
  getTemplate() {
    return createPointAddTemplate();
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
