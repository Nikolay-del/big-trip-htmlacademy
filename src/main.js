import { render, RenderPosition } from './render';
import NewEventButtonView from './view/new-event-button-view';
import FilterView from './view/filter-view';
import EventsPresenter from './presenter/events-presenter';
import TripInfoView from './view/trip-info-view';
import TripsModel from './models/trips-model';

const siteHeaderElement = document.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteTripControlsElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteBodyContainerElement = document.querySelector('.page-main .page-body__container');
const tripsModel = new TripsModel();
const eventsPresenter = new EventsPresenter({
  eventsContainer: siteBodyContainerElement,
  tripsModel
});

render(new TripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteTripControlsElement);
render(new NewEventButtonView(), siteTripMainElement);

eventsPresenter.init();

