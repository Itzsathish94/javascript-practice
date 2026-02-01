//[1]Merge two objects using the spread operator. - refer operations

//[2]Destructure API-like object {user: {name, age}} safely using optional chaining.

//Extract displayName and age in one line
// const { displayName } = response?.result?.currentUser?.details ?? {};
// const age = response?.result?.currentUser?.details?.personal?.age;

// console.log(displayName, age); 

//[3] Create a class User with constructor, method, and a static method. - refer concepts -> oops

//[4] Write a function that accepts rest parameters and returns their sum. 
// function sum (...args){
//     return args.reduce((acc,curr)=>acc+curr,0)
// };

// console.log(sum(1,2,3));

//[5] Use nullish coalescing to provide defaults: const name = user.name ?? 'Anonymous'. - refer concepts -> core


