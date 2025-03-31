import AbstractView from '../framework/view/abstract-view';

function createEventsView() {
  return (
    `
    <section class="trip-events">
        <h2 class="visually-hidden">Trip events</h2>

    </section>
    `
  );
}

export default class EventsView extends AbstractView {
  get template() {
    return createEventsView();
  }
}
