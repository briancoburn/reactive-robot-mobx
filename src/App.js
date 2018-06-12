import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import AppModel from './AppModel';
import TestView from './views/TestView';
import TestStore from './TestStore';

export default class App extends Component {

    constructor(){
        super();
        this.testStore = new TestStore();
        this.appModel = new AppModel(this.testStore);
    }

    render() {
        return (
        <div className="App">
            <Provider store={this.testStore}>
                <div className="App-header">
                    <h2>Reactive Robot - testing frontend data solutions for react</h2>
                    <h3>mobx</h3>
                    <TestView/>
                </div>
            </Provider>
        </div>
    );
    }
}
