//[1]Given an array of objects, extract all unique usernames.
// const users = [
//     { id: 1, username: 'alice', email: 'alice@example.com' },
//     { id: 2, username: 'bob', email: 'bob@example.com' },
//     { id: 3, username: 'alice', email: 'alice2@example.com' },
//     { id: 4, username: 'charlie', email: 'charlie@example.com' },
//     { id: 5, username: 'bob', email: 'bob.smith@example.com' },
//     { id: 6, username: 'diana', email: 'diana@example.com' },
//     { id: 7, username: 'alice', email: 'alice3@example.com' },
//     { id: 8, username: 'eve', email: 'eve@example.com' },
//     { id: 9, username: 'charlie', email: 'c.brown@example.com' },
//     { id: 10, username: 'bob', email: 'bobby@example.com' }
//   ];
  
//two approaches for projects
//1
// const uniqueNames = [...new Set(users.map(user=>user.username))];

//2
// function uniqueUserNames(arr){
    // let freq = {};
    // for(let name of arr){
    //     freq[name.username] = (freq[name.username] ||0) + 1;
    // }
    // return Object.keys(freq);
    
//     const seen = {};
//     for(let user of arr){
//         seen[user.username] = true;
//     }
//     return Object.keys(seen);
    
// }

// console.log(uniqueUserNames(users));

//[2]Find the sum of all numbers in a nested array.
// const nestedNumbers = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10, 11]]], 12];

//for projects
//1
// function sum(arr){
//     return arr.flat(Infinity).reduce((acc,curr)=>acc+curr,0);
// }

//2

// function sumArr(arr){
//     let result = 0;
    
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]==='number'){
//             result+=arr[i]
//         }
//         else if(Array.isArray(arr[i])){
//             result += sumArr(arr[i])
//         }
//     }
//     return result;
// }

// console.log(sumArr(nestedNumbers));

//[3]Merge two arrays of objects based on a common key.
// const users = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Charlie', age: 35 },
//     { id: 4, name: 'Diana', age: 28 }
//   ];
  
//   const orders = [
//     { id: 101, userId: 1, product: 'Laptop', amount: 1200 },
//     { id: 102, userId: 2, product: 'Phone', amount: 800 },
//     { id: 103, userId: 1, product: 'Mouse', amount: 25 },
//     { id: 104, userId: 3, product: 'Keyboard', amount: 75 },
//     { id: 105, userId: 5, product: 'Monitor', amount: 300 }  // userId 5 doesn't exist in users
//   ];

  //for project

  //1
//   function mergeArrays(users,orders){
//     return orders.map(order=>{
//         const user = users.find(user=>user.id === order.userId);
//         if(user){
//             return {...user,...order}
//         }
//         return null;
//     }).filter(item=>item!==null);
//   };

//   console.log(mergeArrays(users,orders));

//[4]Remove duplicates from an array of numbers or strings. - refer array opertaions
//[5]Flatten a nested array (e.g., [1, [2, [3, 4]]] → [1,2,3,4]). - refer array operations



