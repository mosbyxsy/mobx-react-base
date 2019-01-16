import React, {Component} from 'react';
import TodoList from "./todoList";
import store from "../store/index";

class App extends Component {
    render() {
        return (
            <TodoList store={store}/>
        )
    }
}

export default App;