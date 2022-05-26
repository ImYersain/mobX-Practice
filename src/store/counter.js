import { makeAutoObservable } from 'mobx';


class Counter{
    count = 0
    timer = 10
    constructor(){
        makeAutoObservable(this);
    }

    increment(){
        this.count = this.count + 1;
        console.log(this.count)
    }

    decrement(){
        this.count = this.count - 1;
        console.log(this.count)
    }

    get total(){
        return `total is ${this.count + this.timer}`
    }
}

export default new Counter(); // инстанс, объект класса