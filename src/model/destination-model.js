export default class DestinationModel {
  constructor(service) {
    this.service = service;
    this.destinations = this.service.getDestinations();
  }

  getAllDestinations() {
    return this.destinations;
  }

  getDestinationById(id) {
    return this.destinations.find((d) => d.id === id);
  }
}
