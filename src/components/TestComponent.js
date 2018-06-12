import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
require('./TestComponent.css');

@inject('store') @observer
export default class TestComponent extends Component {

    constructor(props){
        super(props);
        this.state = {updated:false};
    }

    componentWillReceiveProps(nextProps) {
        // console.log('TestComponent::componentWillReceiveProps()==>nextProps:', nextProps)
        if(!this.state.updated){
            this.setState({updated:true});
            setTimeout(() => {
                this.setState({updated: false})
            }, 500);
        }
    }

    componentDidMount(){
        // this.setState({id:this.props.id,valueA:this.props.valueA,valueB:this.props.valueB});
    }

  render(){

    let model = this.props.store.getById(this.props.id);
    let combinedClassName = '';
    if(model.updated){
      if(model.status==='error'){
        combinedClassName = 'testComponent backgroundRed'
      }else if(model.status==='warning'){
        combinedClassName = 'testComponent backgroundYellow'
      }else if(model.status==='info'){
        combinedClassName = 'testComponent backgroundGreen'
      }

    }else{
      combinedClassName = 'testComponent backgroundBlue'
    }
    return (
      <div className={combinedClassName}>
        <span>{'valueA:'+model.valueA}</span>
        <span>{'valueB:'+model.valueB}</span>
      </div>
    );
  }
}
