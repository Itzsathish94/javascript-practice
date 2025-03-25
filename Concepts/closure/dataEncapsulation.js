function createCounter(){
    let count = 0;
    return {
        increment : ()=> count++,
        getCount : ()=>count
    }
}

const count = createCounter();

console.log(count.getCount());