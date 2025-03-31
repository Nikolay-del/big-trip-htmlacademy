import {EVENT_TYPES} from '../mock/const';
import AbstractView from '../framework/view/abstract-view';

function createOffersList(type, offers) {
  const foundOffers = offers.find((offer) => offer.type === type);
  offers = foundOffers ? foundOffers.offers : [];

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

function createDestinationList(destinations) {
  const destinationNames = destinations.map((destination) => destination.name);

  if (!destinationNames) {
    return '';
  }

  const destinationOptions = destinationNames.map((name) => `<option value="${name}"></option>`).join('');

  return `<datalist id="destination-list-1">${destinationOptions}</datalist>`;
}

function createDestinationPhotos(pictures) {
  if (!pictures.length) {
    return '';
  }

  const photosMarkup = pictures.map(({src, description}) =>
    `<img alt="${description}" class="event__photo" src="${src}">`).join('');

  return `
      <div class="event__photos-container">
        <div class="event__photos-tape">
            ${photosMarkup}
        </div>
     </div>
  `;
}

function createDestinationInfo(destination) {
  if (!destination) {
    return '';
  }

  const {description, pictures} = destination;

  return `
    <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>

        ${createDestinationPhotos(pictures)}
    </section>
  `;
}

function createPriceInput(basePrice = '') {
  return `
                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" name="event-price" type="text"
                           value="${basePrice}">
                  </div>
  `;
}

function createTimeInputs(dateFrom = '', dateTo = '') {
  return `
                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" name="event-start-time"
                           type="text" value="${dateFrom}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" name="event-end-time"
                           type="text" value="${dateTo}">
                  </div>
  `;
}

function createEventDetails({offersListMarkup, destinationInfoMarkup}) {
  if (!offersListMarkup && !destinationInfoMarkup) {
    return '';
  }

  return `
    <section class="event__details">
        ${offersListMarkup}
        ${destinationInfoMarkup}
    </section>
  `;
}

function createPointFormTemplate({type, destination, basePrice, dateFrom, dateTo}, isEditMode, destinations, offers) {
  const offersListMarkup = createOffersList(type, offers);
  const destinationInfoMarkup = createDestinationInfo(destination);
  return (`
<li class="trip-events__item">
              <form action="#" class="event event--edit" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img alt="Event type icon" class="event__type-icon" height="17" src="img/icons/${type}.png"
                           width="17">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    ${createTypesList()}
                  </div>
                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" list="destination-list-1"
                           name="event-destination" type="text" value="${destination.name ?? ''}">
                    ${createDestinationList(destinations)}
                  </div>

                  ${createTimeInputs(dateFrom, dateTo)}
                  ${createPriceInput(basePrice)}

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  ${isEditMode ? '<button class="event__reset-btn" type="reset">Delete</button>' : '<button class="event__reset-btn" type="reset">Cancel</button>'}
                  ${isEditMode ? `
                    <button class="event__rollup-btn" type="button">
                        <span class="visually-hidden">Close event</span>
                    </button>
                    ` : ''}
                </header>
                ${createEventDetails({offersListMarkup, destinationInfoMarkup})}
              </form>
            </li>
    `);
}

export default class PointFormView extends AbstractView {
  #destinations = null;
  #offers = null;
  #isEditMode = false;
  #data = null;
  #handlerCloseClick = null;
  #handlerSaveClick = null;

  constructor({isEditMode, point = {}, destinations, offers, onCloseClick, onSaveClick}) {
    super();

    this.#destinations = destinations;
    this.#offers = offers;
    this.#isEditMode = isEditMode;
    this.#data = {
      type: point.type || EVENT_TYPES[0],
      basePrice: point.basePrice || '',
      dateFrom: point.dateFrom || '',
      dateTo: point.dateTo || '',
      destination: point.destination || null,
    };
    this.#handlerCloseClick = onCloseClick;
    this.#handlerSaveClick = onSaveClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#cancelClickHandler);
    this.element.querySelector('.event').addEventListener('submit', this.#saveClickHandler);
  }

  get template() {
    return createPointFormTemplate(this.#data, this.#isEditMode, this.#destinations, this.#offers);
  }

  #cancelClickHandler = (evt) => {
    evt.preventDefault();
    this.#handlerCloseClick();
  };

  #saveClickHandler = (evt) => {
    evt.preventDefault();
    this.#handlerSaveClick();
  };
}
