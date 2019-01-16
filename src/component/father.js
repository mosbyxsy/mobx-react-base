import React, {Component} from 'react';
import VM from '../store/index';
import Child from './child';

export default class Father extends Component {

    render() {
        return (
            <Child vm={new VM()}/>
        )
    }
}