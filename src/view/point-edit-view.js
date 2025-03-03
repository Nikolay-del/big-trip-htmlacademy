import { createElement } from '../render';

function createPointEdit() {
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

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-taxi-1" name="event-type"
                                 type="radio" value="taxi">
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-bus-1" name="event-type"
                                 type="radio" value="bus">
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-train-1" name="event-type"
                                 type="radio" value="train">
                          <label class="event__type-label  event__type-label--train"
                                 for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-ship-1" name="event-type"
                                 type="radio" value="ship">
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-drive-1" name="event-type"
                                 type="radio" value="drive">
                          <label class="event__type-label  event__type-label--drive"
                                 for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input checked class="event__type-input  visually-hidden" id="event-type-flight-1"
                                 name="event-type" type="radio" value="flight">
                          <label class="event__type-label  event__type-label--flight"
                                 for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-check-in-1" name="event-type"
                                 type="radio" value="check-in">
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-sightseeing-1" name="event-type"
                                 type="radio" value="sightseeing">
                          <label class="event__type-label  event__type-label--sightseeing"
                                 for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input class="event__type-input  visually-hidden" id="event-type-restaurant-1" name="event-type"
                                 type="radio" value="restaurant">
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      Flight
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" list="destination-list-1"
                           name="event-destination" type="text" value="Chamonix">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" name="event-start-time"
                           type="text" value="18/03/19 12:25">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" name="event-end-time"
                           type="text" value="18/03/19 13:35">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" name="event-price" type="text"
                           value="160">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      <div class="event__offer-selector">
                        <input checked class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1"
                               name="event-offer-luggage" type="checkbox">
                        <label class="event__offer-label" for="event-offer-luggage-1">
                          <span class="event__offer-title">Add luggage</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">50</span>
                        </label>
                      </div>

                      <div class="event__offer-selector">
                        <input checked class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1"
                               name="event-offer-comfort" type="checkbox">
                        <label class="event__offer-label" for="event-offer-comfort-1">
                          <span class="event__offer-title">Switch to comfort</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">80</span>
                        </label>
                      </div>

                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" name="event-offer-meal"
                               type="checkbox">
                        <label class="event__offer-label" for="event-offer-meal-1">
                          <span class="event__offer-title">Add meal</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">15</span>
                        </label>
                      </div>

                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" name="event-offer-seats"
                               type="checkbox">
                        <label class="event__offer-label" for="event-offer-seats-1">
                          <span class="event__offer-title">Choose seats</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">5</span>
                        </label>
                      </div>

                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" name="event-offer-train"
                               type="checkbox">
                        <label class="event__offer-label" for="event-offer-train-1">
                          <span class="event__offer-title">Travel by train</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">40</span>
                        </label>
                      </div>
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a
                      resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the
                      highest summit in the Alps, it's renowned for its skiing.</p>
                  </section>
                </section>
              </form>
            </li>
    `
  );
}

export default class PointEditView {
  getTemplate() {
    return createPointEdit();
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
