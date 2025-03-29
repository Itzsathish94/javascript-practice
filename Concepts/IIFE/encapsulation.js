//here createCounter forms closure due to counter, this can be used to create multiple instances of createCounter

function createCounter(){
    let count = 0;
    return {
        increment : ()=>count++,
        decrement : ()=>count--,
        reset : ()=>count=0,
        getCount : ()=>count
    };
}

let counter = createCounter();
console.log(typeof createCounter);
console.log(typeof counter);

console.log(counter.getCount());
console.log(counter.increment());
console.log(counter.getCount());


//Here count2 is available only through counter2, only one instance exists and new counter2 cant be created - singleton pattern

const counter2 = (function(){
    let count2 = 0;
    return {
            increment2 : ()=>count2++,
            decrement2 : ()=>count2--,
            reset2 : ()=>count2=0,
            getCount2 : ()=>count2
    }
})();

console.log(counter2.increment2());
console.log(counter2.getCount2());
console.log(typeof counter2);
