//[1]Write a closure that keeps count of function calls.

// function callCounter(func){
//     let count = 0;
//     return function(...args){
//         count++;
//         console.log(`${func.name} called ${count} times`);
//         return func.apply(this,args);
//     }
// };

// function greet(){
//     return `Hello`
// };

// const countedGreet = callCounter(greet);
// console.log(countedGreet());
// console.log(countedGreet());
// console.log(countedGreet());


//[2]Implement debounce for a function that prints a string. - refer core->debouncing

//[3]Implement throttle for a function that prints a string every X ms.

// function throttle(  func, delay ){
//     let lastCall = 0;
//     return function (...args){
//         const now = Date.now();
//         if(now -lastCall >=delay){
//             lastCall = now;
//             func.apply(this,args)
//         }
//     }
// };

// function printMessage(msg){
//     console.log(`${new Date().toLocaleTimeString()}: ${msg}`)
// }

// const throttledPrint = throttle(printMessage,2000);

// throttledPrint('Hello 1'); // Executes immediately
// throttledPrint('Hello 2'); // Ignored (too soon)
// throttledPrint('Hello 3'); // Ignored (too soon)

// setTimeout(() => throttledPrint('Hello 4'), 2100); // Executes (>2s passed)
// setTimeout(() => throttledPrint('Hello 5'), 2200); // Ignored (too soon)

//[4]Create a generator that yields Fibonacci numbers.

// function* generateFibonacci(){
// let [prev, curr] = [0,1];
// yield prev;
// yield curr;
// while(true){
//     [prev,curr] = [curr,prev+curr];
//     yield curr;
// };
// }

// const generateFibonacciNumbers = generateFibonacci();
// console.log(generateFibonacciNumbers.next().value);
// console.log(generateFibonacciNumbers.next().value);
// console.log(generateFibonacciNumbers.next().value);
// console.log(generateFibonacciNumbers.next().value);
// console.log(generateFibonacciNumbers.next().value);
// console.log(generateFibonacciNumbers.next().value);

//[5]Write a currying function for addition: add(2)(3)(4) → 9. - refer core -> concepts
