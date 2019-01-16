import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import TodoList from "./todoList";
import store from "../store/index";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoList/>
            </Provider>
        )
    }
}

export default App;