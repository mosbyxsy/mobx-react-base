import {action, computed, observable} from "mobx";

export default class VM {
    @observable firstName = "";
    @observable lastName = "";
    @computed
    get fullName() {
        const {firstName, lastName} = this;
        if (!firstName && !lastName) {
            return "Please input your name!";
        } else {
            return firstName + " " + lastName;
        }
    }
    @action.bound
    setValue(key, event) {
        this[key] = event.target.value;
    }
    @action.bound
    doReset() {
        this.firstName = "";
        this.lastName = "";
    }
}