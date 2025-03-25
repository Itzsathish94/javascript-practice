let count = 0;

function counter(){
    count ++
    console.log(count);
}

counter();
console.log(count);

const counter2 = (function createCounter(){
    let count2 = 100;
    return function(){
        count2 ++
        console.log(count2);
    }
})()

counter2();