
// const arr = [1,2,3,4,4];

// function checkSort(arr){
//     let pointer = 0;
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i+1]>=arr[i]){
//             pointer++
//         }
//     }
//     return pointer===arr.length-1 ? 'Ascending' : 'noT ASCENDING'
// }

// console.log(checkSort(arr));

// function currying(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }

// const curriedAdd = currying(2)(5)(1);
// console.log(curriedAdd);

// console.log(0||''||null||undefined||'default');

// console.log(''&&'hello'); //''
// console.log(" "&& "hello") // 'hello'
// console.log(" "||"hello") // ' ' 

// console.log(8 / 0);
// console.log(typeof (8 / 0));
// console.log(-8 / 0);
// console.log(typeof (-8 / 0));
// console.log(0 / 0);
// console.log(typeof (0 / 0));

// const person = {};

// function isEmpty(person){
//     if(Object.keys(person).length!==0){
//         console.log('Object is not empty') ;
//     }
//     else{
//        console.log(new Error('Object is empty'));
//     }
// }

// isEmpty(person) ///throw

// console.log(null==null) //true
// console.log(null===null) //true
// console.log(null==undefined) //true
// console.log(null===undefined) //false

// Remove key corresponding to odd no in objects.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// };

// function deleteOddKeys(obj){
//     let getKeys = Object.keys(obj);
//     for(key of getKeys){
//         if(obj[key]%2!==0){
//             delete obj[key];
//         }
//     }
//     console.log(getKeys);
// }

// deleteOddKeys(obj);
// console.log(obj);

// 1|2 vs 1||2 what is the difference

// write a function declare two variables in one function use that two variable in another function to calculate the sum

// function outer(){
//     let a = 1;
//     let b = 2;
//     function inner(){
//       console.log(a+b);
//     }
//     inner();
// }

// outer();

// const arr = [
//     { ab: 1, bc: 2 },
//     { ab: 1, bc: 3 },
//     { ab: 5, bc: 6 },
//     { ab: 4, bc: 8 }
//   ];
// //    Find the sum of the ab property in all objects
// // console.log(arr[0].ab);
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i].ab;
// }
// console.log(sum);

// const users = [
//     { id: 1, name: 'Alice', age: 30 },
//     { id: 2, name: 'Bob', age: 25 },
//     { id: 3, name: 'Charlie', age: 35 },
//     { id: 4, name: 'David', age: 40 }
// ];
// // Find the average age of all users
// let totalAge = 0;
// for(let i=0;i<users.length;i++){
//     totalAge+=users[i].age;
// }
// console.log(totalAge/users.length);

//MEMOIZATION

// const obj = {name:'sathish',address:{cit:'chennai',street:1}};
// const deep = JSON.parse(JSON.stringify(obj));
// deep.name = 'basha';
// console.log(obj);
// console.log(deep);



