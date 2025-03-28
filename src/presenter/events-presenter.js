import ListView from '../view/list-view';
import {render} from '../render';
import SortView from '../view/sort-view';
import EventsView from '../view/events-view';
import PointItemView from '../view/point-item-view';
import PointFormView from '../view/point-form-view';

export default class EventsPresenter {
  eventsComponent = new EventsView();
  listComponent = new ListView();


  constructor({eventsContainer, pointModel, destinationModel, offerModel}) {
    this.eventsContainer = eventsContainer;
    this.pointModel = pointModel;
    this.destinationModel = destinationModel;
    this.offerModel = offerModel;
  }

  init() {
    this.eventsData = [...this.pointModel.getPoints()];
    this.destinations = [...this.destinationModel.getAllDestinations()];
    this.offers = [...this.offerModel.getAllOffers()];

    render(this.eventsComponent, this.eventsContainer);
    render(new SortView(), this.eventsComponent.getElement());
    render(this.listComponent, this.eventsComponent.getElement());
    render(new PointFormView(false, {
      point: {},
      destinations: this.destinations,
      offers: this.offers
    }), this.listComponent.getElement());

    render(new PointFormView(true, {
      point: this.eventsData[0],
      destinations: this.destinations,
      offers: this.offers
    }), this.listComponent.getElement());

    this.eventsData.forEach((value) => {
      const type = value.type;

      const offersType = this.offerModel.getOfferByType(type);
      const updatedOffers = value.offers.map((offer) => offersType.find((of) => of.id === offer));
      const updatedPoint = {
        ...value,
        offers: updatedOffers,
      };

      render(new PointItemView({point: updatedPoint}), this.listComponent.getElement());
    });
  }
}
