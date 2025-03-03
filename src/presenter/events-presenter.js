import ListView from '../view/list-view';
import { render } from '../render';
import SortView from '../view/sort-view';
import EventsView from '../view/events-view';
import PointItemView from '../view/point-item-view';
import PointEditView from '../view/point-edit-view';
import PointAddView from '../view/point-add-view';

export default class EventsPresenter {
  eventsComponent = new EventsView();
  listComponent = new ListView();


  constructor({eventsContainer, tripsModel}) {
    this.eventsContainer = eventsContainer;
    this.tripsModel = tripsModel;
  }

  init() {
    this.eventsData = [...this.tripsModel.getTrips()];

    render(this.eventsComponent, this.eventsContainer);

    render(new SortView(), this.eventsComponent.getElement());
    render(this.listComponent, this.eventsComponent.getElement());

    render(new PointAddView(), this.listComponent.getElement());
    render(new PointEditView(), this.listComponent.getElement());

    this.eventsData.forEach((value) => {
      render(new PointItemView({point: value}), this.listComponent.getElement());
    });
  }
}
