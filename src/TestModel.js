import {observable} from 'mobx';

export default class TestModel{
  id = '';
  @observable valueA = -1;
  @observable valueB = -1;
  @observable status = '';
  @observable updated = false;

  constructor(){
    //console.log('***TestModel***')
  }
  updateFromJson(data){
    this.id = data.id;
    this.valueA = data.valueA;
    this.valueA = data.valueA;
    this.valueB = data.valueB;
    this.status = data.status;
    this.updated = true;
    setTimeout(()=>{
      this.updated = false;
    },500);
  }
}