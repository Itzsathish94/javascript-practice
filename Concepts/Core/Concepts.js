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
// const counter =(()=>{
//     let count = 0

//     return {
//         increment:()=>{
//             count++
//             return count;
//         },
//         decrement:()=>{
//             count--
//             return count;
//         },
//         getValue:()=> count
//     }
// })();

// console.log(counter.getValue())
// console.log(counter.increment())
// console.log(counter.getValue())

// [6] Class
// class Person{
//     constructor(fname,lname,age){
//         this.firstname=fname
//         this.lastname=lname
//         this.age=age
//     }
//     getDetails(){
//         return `My name is ${this.firstname} ${this.lastname} and I am ${this.age} years old`
//     }
// }

// const myFather = new Person('Alex','Tony',45)

// console.log(myFather.getDetails())

// [7] Inheritance
// class Employee extends Person{
//     constructor(fname,lname,age,job){
//         super(fname,lname,age)
//         this.jobtitle=job
//     }
//     getJobDetails(){
//         return `${this.firstname} ${this.lastname} works as an ${this.jobtitle}`
//     }
// }

// const myMother = new Employee('Jane','doe',45,'Tech')
// console.log(myMother.getJobDetails())

// [8,9]Call, Apply
// const person = {
//     name:"Basha"
// };

// function greet(greeting,punctuation){
//     console.log(`${greeting} Iam ${this.name} ${punctuation}`);
// };

// greet.call(person,'Hello', '!');
// greet.apply(person,['Hello','!']);


// [10]Bind
// function sayHello(){
//     console.log(`Hello, ${this.name}!`)
// }
// const person = {name:'Sathish'}
// const greetperson = sayHello.bind(person)
// greetperson()

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
// const person = {
//     name:'sathish',
//     age:12,
//     address:{
//         city:'thanjavur'
//     }
// }
// console.log(person.country?.code);

// [14]Nullish coalsecing operator
// const value1=null
// const value2 = undefined
// const value3 = false
// const value4 = 'value'
// const defaultValue = 'nullish'

// console.log(value1??defaultValue);
// console.log(value2??defaultValue);
// console.log(value3??defaultValue);
// console.log(value4??defaultValue);



//[16] Memoization
// function add(a,b){
//     return a+b;
// }
// function memoize(fn){
//     const cache = {};
//     return function(a,b){
//         const key = `${a},${b}`;
//         if(cache[key]!==undefined){
//             return cache[key];
//         }
//         const result = fn(a,b);
//         cache[key] = result;
//         return result;
//     }
// }
// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(1,2))


// const cache = {};

// function memoizedAdd(a,b){
//     const key = `${a},${b}`;
//     if(cache[key]!==undefined){
//         return cache[key];
//     }
//     const result = add(a,b);
//     cache[key] = result;
//     return result;
// }

// console.log(memoizedAdd(1,2));

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