import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {compose} from 'recompose';

class Child extends Component {
    render(){
        const {vm} = this.props;
        return(
            <div>
                <h1>This is mobx-react!</h1>
                <div>
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" value={vm.firstName} id="firstName" onChange={e => vm.setValue("firstName", e)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" value={vm.lastName} id="lastName" onChange={e => vm.setValue("lastName", e)} />
                </div>
                <div>Full name: {vm.fullName}</div>
                <div>
                    <button onClick={vm.doReset}>Reset</button>
                </div>
            </div>
        )
    }
}

//注意inject与observer的顺寻，否则会报错
export default compose(
    inject("vm"),
    observer
)(Child);