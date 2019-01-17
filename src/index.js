import {observable, isArrayLike, computed, action, runInAction, autorun, when, reaction} from "mobx";

class Store {
    @observable array = [];
    @observable obj = {};
    @observable map = new Map();

    @observable string = 'hello';
    @observable number = 20;
    @observable bool = false;

    @action bar() {
        store.string = 'word';
        store.number = 333;
        store.bool = true;
    }

}

let store = new Store();

// reaction(() => [store.string, store.number, store.bool], arr => console.log(arr.join('+'))); //初始化不会先运行一次
autorun(() => console.log(store.string + store.number + store.bool)); //初始化先运行一次

store.bar();

// 打印结果
//word+333+true