import { mockPoints } from '../mock/point';

export default class TripsModel {
  trips = [...mockPoints];

  getTrips() {
    return this.trips;
  }
}
