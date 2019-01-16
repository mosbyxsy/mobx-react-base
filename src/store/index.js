// store.js
import {observable, computed, action} from "mobx";

class Todo {
    id = Math.random();
    @observable title = '';
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }

    @action.bound toggle() {
        this.finished = !this.finished;
    }

}

class Store {
    @observable todos = [];

    @action.bound createTodo(title) {
        this.todos.unshift(new Todo(title))
    }

    @action.bound removeTode(todo) {
        // remove不是原生的方法，是mobx提供的
        this.todos.remove(todo);
    }

    @computed get left() {
        return this.todos.filter(item => !item.finished).length;
    }
}

const store = new Store();

export default store;