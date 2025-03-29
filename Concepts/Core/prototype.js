//null -> Object.prototype -> 
// Array.prototype , 
// String.prototype, 
// Number.prototype, 
// Boolean.prototype, 
// Function.prototype, 
// Date.prototype, 
// Error.prototype, 
// Symbol.prototype, 
// BigInt.prototype, 
// RegExp.prototype

const myArr = [1,23];
const str = 'Hi';
const num = 1;
const bool = true;
const myFunc = () =>{};
const date = new Date();
const err = new Error();
const sym = Symbol('1');
const bigNum = 1n;
const regex = /a/;

console.log(Object.getPrototypeOf(myArr));
console.log(Object.getPrototypeOf(str));
console.log(Object.getPrototypeOf(num));
console.log(Object.getPrototypeOf(bool));
console.log(Object.getPrototypeOf(myFunc));
console.log(Object.getPrototypeOf(date));
console.log(Object.getPrototypeOf(err));
console.log(Object.getPrototypeOf(sym));
console.log(Object.getPrototypeOf(bigNum));
console.log(Object.getPrototypeOf(regex));
console.log(date.__proto__,'date proto');
console.log(str.__proto__,'str proto')

//Primitives (number, string, boolean, symbol, bigint) do not have prototypes unless temporarily boxed.
//Objects (array, function, date, error, regex) always have prototypes.
//Prototypes define the default behavior of objects (e.g., toString(), valueOf()).