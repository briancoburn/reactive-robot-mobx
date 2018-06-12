import React, { Component } from 'react';
import TestComponent from '../components/TestComponent';
import { inject, observer } from 'mobx-react';
require('./TestView.css');

@inject('store') @observer
export default class TestView extends Component {

  constructor(props){
    super(props);
  }

  renderTestComponents(){
    let components = [];
    this.props.store.ids.forEach((id)=>{
      components.push(<TestComponent key={id} id={id}/>);
    })
    return components;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <div className={'componentContainer'}>
          {this.renderTestComponents()}
          </div>
      </div>
    );
  }
}
