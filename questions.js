// const str = 'my name is basha'
// // output should be like
// 'mY namE iS bashA'

// function lastLetter(str){
//     let result = str.split(' ');
//     let word ='';
//     for(let i=0;i<result.length;i++){
//         word+=`${result[i].slice(0,-1)+result[i].slice(-1).toUpperCase()} `;
//     }
//     return word;
// }

// console.log(lastLetter(str));


// const str = 'Hello world'

// function print(str){
//     return new Promise((resolve)=>{
//         resolve(str);
//     })
// }

// print(str).then(res=>console.log(str)).catch(err=>console.log(err));


// let word ="aabbcccdddd"

// function frequency(str){
//     let freq={};

//     for(let char of str){
//         freq[char] = (freq[char] || 0)+1;
//     }
//     return freq;
// }

// console.log(frequency(word));

/////////////////////////////////////////////////////////////////////////////////////////

const arr = [
    {
      id: 301,
      userId: 21,
      amount: 1200,
      status: 'confirmed',
      services: [ 'spa', 'dinner' ]
    },
    {
      id: 302,
      userId: 22,
      amount: 3000,
      status: 'pending',
      services: [ 'room', 'breakfast' ]
    },
    {
      id: 303,
      userId: 23,
      amount: 1500,
      status: 'cancelled',
      services: [ 'airport pickup' ]
    },
    {
      id: 304,
      userId: 21,
      amount: 2200,
      status: 'confirmed',
      services: [ 'room', 'dinner', 'breakfast' ]
    }
  ]
  
//   output should like this:
  
//   {
  
//   confirmed : [
//     {
//       _id: ObjectId('6895ca5d7558140b472710bf'),
//       id: 304,
//       userId: 21,
//       amount: 2200,
//       status: 'confirmed',
//       services: [ 'room', 'dinner', 'breakfast' ]
//     },
//   {
//       _id: ObjectId('6895ca5d7558140b472710bc'),
//       id: 301,
//       userId: 21,
//       amount: 1200,
//       status: 'confirmed',
//       services: [ 'spa', 'dinner' ]
//     }
  
//   ],
  
//   pendings:[],
//   cancelled:[],
//   }


// function sortStatus(arr){
//     let result = {};
   
//     for(let i=0;i<arr.length;i++){
//         if(result[arr[i].status]){


//             result[arr[i].status].push(arr[i]);
       
//         }
//         else{
//             result[arr[i].status] = [arr[i]];
//         }   
//     }

//     return result;

// }

// console.log(sortStatus(arr));


////////////////////////////


// let arr = [[3,2,1],[4,5,6],[-10,9,20]]


// function deleteSmallest(arr){
//     let sum = Infinity;
//     let elem = 0;
//     for(let i=0;i<arr.length-1;i++){
//         let elemSum = arr[i].reduce((acc,curr)=>acc+curr)
//         if(elemSum < sum){
//             sum = elemSum;
//             elem = i;
//         }
//     }
//     arr.splice(elem,1);
//     return arr;
// }

// console.log(deleteSmallest(arr));

//////////////////////////////////////////////////////

// function* generator(){
//     let num = 4;
//     while(true){
//         yield num;
//         num+=4;
//     }
// }

// const multiplesOf4 = generator();

// console.log(multiplesOf4.next().value);
// console.log(multiplesOf4.next().value);

///////////////////////////////////////////////////

// const person = {name:'sathish'};

// const handler ={
//     get(target,property){
//         console.log("getting target");
//         return target[property] || 'Property ilada';
//     }
//     ,
//     set(target,property,value){
//         console.log('Setting property');
//         target[property] = value;
//         return true;
//     }
// }

// const proxyPerson = new Proxy(person,handler);

// console.log(proxyPerson.name);

////////////////////////////////////////////////////////

// function outerFunction() {
//     let count = 0;

//     function innerFunction() {
//         count++;
//         console.log(count);
//     }

//     return innerFunction;
// }

// const counter1 = outerFunction();
// const counter2 = outerFunction();

// counter1(); // ? 1
// counter1(); // ? 2
// counter2(); // ? 1
// counter1(); // ? 3
