// // [1]Recursion
// function countdown(n){
//     if(n<=0){
//         console.log('Done')
//         return
//     }
//     console.log(n)
//     countdown(n-1)
// }
// countdown(5)

//[2] Promise
// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         let sum=0
//         if(typeof(a)==='number' && typeof(b)==='number'){
//             sum=a+b
//             resolve(sum)
//         }
//         else{
//             reject('Provide correct inputs')
//         }
//     })
//     }
//     add(2,'3').then(sum=>console.log(sum)).catch(err=>console.log(err))

//[3]Promise all
// function p1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('P1 failure')
//         },3000)
        
//     })
// }
// function p2(){
//     return new Promise((resolve,reject)=>{
//         resolve('P2 success')
//     })
// }
// function p3(){
//     return new Promise((resolve,reject)=>{
//         reject('P3 failure')
//     })
// }
// Promise.any([p1(),p2(),p3()]).then(results=>console.log(results)).catch(err=>console.log(err))

// [4] Async function
// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         let sum=0
//                 if(typeof(a)==='number' && typeof(b)==='number'){
//                     sum=a+b
//                     resolve(sum)
//                 }
//                 else{
//                     reject('Provide correct inputs')
//                 }
//             })
// }

// async function addTwonumbers(a,b){
//     try{
//     const result=await add(a,b)
//     console.log(result)
// }
// catch(err){
//     console.error(err)
// }
// }

// addTwonumbers(2,3)

// [5] IIFE
// (function(){
//     console.log('This is an IIFE')
// })()

// (()=>{
//     console.log('This is also an IIFE')
// })();

// Example
// const counter = (function createCounter(){
//     let count = 0;
//     return {
//         increment:()=>count++,
//         reset:()=>count=0,
//         getCount:()=>console.log(count)
//     }
// })();

// counter.getCount();
// counter.increment();


// [6] Class
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     };
//     static greeting(){
//         console.log('Getting details');
//     }
//     greet(){
//         console.log(`Hi Iam ${this.name} and Iam ${this.age} years old`);
//     }
// };

// const father = new Person('Martin',20);
// father.greet();

// [7] Inheritance
// class Employee extends Person{
//     constructor(name,age,job){
//         super(name,age);
//         this.job = job;
//     }
//     greet(){
//         console.log(`Hi Iam ${this.name} (${this.job}) and Iam ${this.age} years old`);
//     }
// }

// const fatherJob = new Employee('Scorsky',40,'Mechanic');
// fatherJob.greet();
// Person.greeting();

// [8,9,10]Call, Apply,Bind
// function sayHello(greeting,punctuation){
//     console.log(`${greeting}, Iam ${this.name}${punctuation}`);
// };

// const parent = {name:'Katy'};
// sayHello.call(parent,'Hello','!');

// const student = {name:'Kal'};
// sayHello.apply(student,['Hello','!']);

// const child = {name:'Stark'};
// const boundChild = sayHello.bind(child,'Hello','!');
// boundChild();

// [11]Currying
// function curryAdd(x){
//     return function(y){
//         return function(z){
//             return x+y+z
//         }
//     }
// }
// const curriedAdd = curryAdd(2)(3)
// console.log(curriedAdd(5))

// [12]Generator
// function* generateMultiplesof4(){
//     let number = 4
//     while(true){
//         yield number
//         number +=4
//     }
// }
// const multiplesOf4 = generateMultiplesof4()
// console.log(multiplesOf4.next().value)
// console.log(multiplesOf4.next().value)

// [13]Optional chaining
// const user ={
//     name:'sathish',
//     address:{
//         street:'12',
//         no:2
//     },
//     greet(){
//         console.log(`Iam ${this.name}`)
//     }
// };

// console.log(user.location?.code);
// console.log(user.treat?.());

// [14]Nullish coalsecing operator - default values for null and undefined
// const user ={
//     name:'sathish',
//     address:{
//         street:'12',
//         no:2
//     },
//     greet(){
//         console.log(`Iam ${this.name}`)
//     },
//     extra:null,
// };

// const err = 'Data not found'

// console.log(user.location?.code ?? err);
// console.log(user.treat?.() ?? err);
// console.log(user.extra ?? err);


//[16] Memoization
// function add(...args){
//     return args.reduce((acc,curr)=>acc+curr);
// };

// function memoize(fn){
//     let cache ={};
//     return function (...args){
//         let key = args.join(',');
//         if(cache[key]){
//             console.log('Fetching result from cache')
//         return cache[key];
//         } 
//         else {
//             console.log('Computing result');
//             let result = fn(...args);
//             cache[key] = result;
//             return result;
//         }
//     }
// }

// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(1,2,3));
// console.log(memoizedAdd(1,2,3));

//[17]Proxy object
// const user = {
//     name:'sathish',
//     age:14
// }
// const handler = {
//     get(target,property){
//         console.log(`Getting ${property}`);
//         return target[property] || 'Not found';
//     },
//     set(target,property,value){
//         console.log(`Setting ${property} to ${value}`);
//         target[property] = value;
//         return true;
//     }
// }
// const proxyUser = new Proxy(user,handler);
// console.log(proxyUser.name)

//[18]Throwing error
// const arr = [1,2,3,4];
// function check(){
//     if(arr.length!==0){
//         throw new Error('Arr not empty');
//     }
//     return arr.length;
// }

// try{
//     console.log(check(arr));
// }
// catch(error){
//     console.error('ERROR:',error.message);
// }

//[19]Factory function
// function buildUser(name,age){
//     return {
//         name,
//         age
//     }
// }

// const user1 = buildUser('Sathish',34);
// console.log(user1);

//[20]