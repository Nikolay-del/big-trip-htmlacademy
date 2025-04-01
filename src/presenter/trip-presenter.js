import {render, RenderPosition} from '../framework/render';
import TripInfoView from '../view/trip-info-view';

export default class TripPresenter {
  #pointModel = null;
  #destinationModel = null;
  #tripMainElement = null;

  #points = null;
  #destinations = null;

  #cities = null;

  constructor({pointModel, destinationModel, tripMainElement}) {
    this.#pointModel = pointModel;
    this.#destinationModel = destinationModel;
    this.#tripMainElement = tripMainElement;
  }

  init() {
    this.#points = this.#pointModel.points;
    this.#destinations = this.#destinationModel.destinations;

    this.#renderTripInfo();

    return this.#getCities();
  }

  #renderTripInfo() {
    render(new TripInfoView(), this.#tripMainElement, RenderPosition.AFTERBEGIN);
  }

  #getCities() {
    const destinationsPoint = this.#points.map((item) => this.#destinationModel.getDestinationById(item.destination).name);
    this.#cities = new Set(destinationsPoint);
  }
}
