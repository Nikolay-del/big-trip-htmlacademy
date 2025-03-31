import { render, RenderPosition } from './framework/render';
import NewEventButtonView from './view/new-event-button-view';
import FilterView from './view/filter-view';
import EventsPresenter from './presenter/events-presenter';
import TripInfoView from './view/trip-info-view';
import PointModel from './model/point-model';
import MockService from './service/mock-service';
import DestinationModel from './model/destination-model';
import OfferModel from './model/offer-model';

const siteHeaderElement = document.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteTripControlsElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteBodyContainerElement = document.querySelector('.page-main .page-body__container');
const mockService = new MockService();
const pointModel = new PointModel(mockService);
const destinationModel = new DestinationModel(mockService);
const offerModel = new OfferModel(mockService);

const eventsPresenter = new EventsPresenter({
  eventsContainer: siteBodyContainerElement,
  pointModel,
  destinationModel,
  offerModel
});

render(new TripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteTripControlsElement);
render(new NewEventButtonView(), siteTripMainElement);

eventsPresenter.init();

