import {observable, action, computed} from 'mobx';
import TestModel from './TestModel';

export default class TestStore{
  @observable.shallow _items = {};
  @observable.shallow _ids = {};

  constructor(){
    console.log('***TestStore***');
  }

  @computed get items () {
    return Object.values(this._items);
  }

  @computed get ids () {
    return Object.values(this._ids);
  }

  getById(id){
    return this._items[id];
  }

  updateFromServer(data) {
    if (data instanceof Array) {
      data.forEach((datum) => {
        if(!datum){
          return;
        }
        let model = this._items[datum.id];
        if (model) {
          model.updateFromJson(datum);
        } else {
          model = new TestModel();
          model.updateFromJson(datum);
          this._items[model.id] = model;
        }
        this._ids[model.id] = model.id;
      })
    } else if(data && data.id) {
      let model = this._items[data.id];
      if (model) {
        model.updateFromJson(data);
      } else {
        model = new TestModel();
        model.updateFromJson(data);
        this._items[model.id] = model;
      }
      this._ids[model.id] = model.id;
    }
  }
}