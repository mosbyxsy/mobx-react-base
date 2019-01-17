import React, {Component} from 'react';
import VM from '../store/index';
import Child from './child';
import {Provider} from 'mobx-react';

export default class Father extends Component {

    render() {
        return (
            <Provider vm={new VM()}>
                <Child />
            </Provider>
        )
    }
}