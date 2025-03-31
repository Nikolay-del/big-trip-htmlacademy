import AbstractModel from './abstract-model';

export default class PointModel extends AbstractModel{
  #points = null;

  constructor(service) {
    super(service);
    this.#points = this._service.points;
  }

  get points() {
    return this.#points;
  }
}
