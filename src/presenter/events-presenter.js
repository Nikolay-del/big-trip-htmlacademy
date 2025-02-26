import ListView from '../view/list-view';
import { render } from '../render';
import SortView from '../view/sort-view';
import EventsView from '../view/events-view';
import PointItemView from '../view/point-item-view';
import PointEditView from '../view/point-edit-view';

export default class EventsPresenter {
  eventsComponent = new EventsView();
  listComponent = new ListView();


  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(this.eventsComponent, this.eventsContainer);

    render(new SortView(), this.eventsComponent.getElement());
    render(this.listComponent, this.eventsComponent.getElement());

    render(new PointEditView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointItemView(), this.listComponent.getElement());
    }
  }
}
