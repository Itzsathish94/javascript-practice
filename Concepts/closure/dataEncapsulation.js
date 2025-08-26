function createCounter(){
    let count = 0;
    return {
        increment : ()=> count++,
        getCount : ()=>count
    }
}

const count = createCounter();

console.log(count.getCount());

const count2 = createCounter();

count2.increment();

console.log(count2.getCount());