export default class AbstractModel {
  constructor(service) {
    if (new.target === AbstractModel) {
      throw new Error('AbstractModel is abstract and cannot be instantiated directly');
    }

    this._service = service;
  }
}
