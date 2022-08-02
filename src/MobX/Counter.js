import {makeObservable, observable, action} from  'mobx';

export class Counter {
    numberOfClicks = 0;

    //Tell MobX that numberOfClicks is the state to be observed and increment method is an action to change the state
    constructor() {
        makeObservable(this, {
            numberOfClicks: observable,
            increment: action,
        })
    }

    increment = amount => {
        this.numberOfClicks += amount;
    }
}