import {observable} from "mobx";

let num = observable.box(20);
let str = observable.box('hello');
let bool = observable.box(true);

// 使用set()设置数值
num.set(50);

// get()获取原生数值
console.log(num.get(), str, bool);