// Question 1 — Basics
// What will be printed here? And why?

// let x = 10;

// function test() {
//     let y = 20;
//     console.log(x); // A
//     console.log(y); // B
// }

// test();
// console.log(y); // C

//answer
// A → 10 → x is global, accessible inside the function.
// B → 20 → y is local to test(), accessible within it.
// C → ReferenceError → y is function-scoped, not available outside test().

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 2 — Block Scope
// What will be printed here, and why?

// function demo() {
//     if (true) {
//         var a = 1;
//         let b = 2;
//         const c = 3;
//     }
//     console.log(a); // A
//     console.log(b); // B
//     console.log(c); // C
// }

// demo();

//answer
// A → 1 → var is function-scoped, so it’s still accessible outside the if block inside demo().
// B → ReferenceError → let is block-scoped, not accessible outside the if.
// C → ReferenceError → const is also block-scoped.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 3 — Variable Shadowing
// What will be printed here, and why?

// let x = 5;

// function outer() {
//     let x = 10;
//     if (true) {
//         let x = 20;
//         console.log(x); // A
//     }
//     console.log(x); // B
// }

// outer();
// console.log(x); // C

//answer
// A: Prints 20 → Different scopes have their own x, so the x in that block/function is independent of the global x.
// B: Prints 10 → The x inside the function shadows any outer x and directly uses the local one.
// C: Prints 5 → No local x is defined, so it uses the global x.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//q 4 CLourse
// function outer() {
//     let a = 10;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }
// outer();

//asnwer

//10 because inner “remembers” a through closure, even after outer has finished running.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//q 5 closure
// function outer() {
//     let x = 5;
//     function inner() {
//         console.log(x);
//     }
//     x = 10;
//     return inner;
// }

// let fn = outer();
// fn();

//answer
// outer defines x = 10.
// inner closes over that x (lexical scoping).
// When outer calls inner the first time, it prints 10.
// Then outer changes x to 20.
// The same x is still in inner’s scope, so the second inner() call now prints 20.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


