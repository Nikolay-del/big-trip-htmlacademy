export default class PointModel {
  constructor(service) {
    this.service = service;
    this.points = this.service.getPoints();
  }

  getPoints() {
    return this.points;
  }
}
