import ListView from '../view/list-view';
import {render, replace} from '../framework/render';
import SortView from '../view/sort-view';
import EventsView from '../view/events-view';
import PointItemView from '../view/point-item-view';
import PointFormView from '../view/point-form-view';
import NoPointView from '../view/no-point-view';

export default class EventsPresenter {
  #eventsComponent = new EventsView();
  #listComponent = new ListView();
  #currentFilter = 'Everything';

  #eventsContainer = null;
  #pointModel = null;
  #destinationModel = null;
  #offerModel = null;

  #events = null;
  #destinations = null;
  #offers = null;


  constructor({eventsContainer, pointModel, destinationModel, offerModel}) {
    this.#eventsContainer = eventsContainer;
    this.#pointModel = pointModel;
    this.#destinationModel = destinationModel;
    this.#offerModel = offerModel;
  }

  init() {
    this.#events = [...this.#pointModel.points];
    this.#destinations = [...this.#destinationModel.destinations];
    this.#offers = [...this.#offerModel.offers];

    this.#renderBoard();
  }

  #renderBoard() {
    render(this.#eventsComponent, this.#eventsContainer);
    render(new SortView(), this.#eventsComponent.element);
    render(this.#listComponent, this.#eventsComponent.element);

    if (!this.#events.length) {
      render(new NoPointView({typeFilter: this.#currentFilter}), this.#listComponent.element);
    }

    this.#events.forEach((value) => {
      this.#renderPoint(value);
    });
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        replaceEditPointToDefault();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };


    const type = point.type;

    const offersType = this.#offerModel.getOfferByType(type);
    const updatedOffers = point.offers.map((offer) => offersType.find((of) => of.id === offer));
    const updatedDestination = this.#destinationModel.getDestinationById(point.destination);
    const updatedPoint = {
      ...point,
      offers: updatedOffers,
      destination: updatedDestination,
    };

    const pointComponent = new PointItemView({
      point: updatedPoint,
      onOpenClick: () => {
        replaceDefaultPointToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const pointEditComponent = new PointFormView({
      isEditMode: true,
      point: updatedPoint,
      destinations: this.#destinations,
      offers: this.#offers,
      onCloseClick: () => {
        replaceEditPointToDefault();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onSaveClick: () => {
        replaceEditPointToDefault();
      }
    });

    render(pointComponent, this.#listComponent.element);

    function replaceDefaultPointToEdit() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceEditPointToDefault() {
      replace(pointComponent, pointEditComponent);
    }
  }
}
