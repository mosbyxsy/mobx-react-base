import {action, computed, observable, decorate} from "mobx";

class VM {
    firstName = "";
    lastName = "";
    get fullName() {
        const {firstName, lastName} = this;
        if (!firstName && !lastName) {
            return "Please input your name!";
        } else {
            return firstName + " " + lastName;
        }
    }
    setValue(key, event) {
        this[key] = event.target.value;
    }
    doReset() {
        this.firstName = "";
        this.lastName = "";
    }
}

decorate(VM, {
    firstName: observable,
    lastName: observable,
    fullName: computed,
    setValue: action.bound,
    doReset: action.bound
});

export default VM;