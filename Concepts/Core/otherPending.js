// map to convert all element of a string array to uppercase 

// const arr = ['hi','hello','wrong'];
// function convertToTitle(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i] = arr[i].slice(0,1).toUpperCase()+arr[i].slice(1);
//     }
//     return arr;
// }
// console.log(convertToTitle(arr));

//using reduce to find largest element in a string array
// const arr = ['hi','hello','wrong'];
// function longestWord(arr){
//    return arr.reduce((acc,curr)=>{
//     return curr.length > acc.length ? curr : acc;
//     },'')
// }
// console.log(longestWord(arr));


 
 	
// Find the second largest even number in an array without sorting

// function secondlargestEven(arr){
//     let largest = - Infinity;
//     let secondlargest = - Infinity;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0 && arr[i]>largest){
//             secondlargest = largest;
//             largest = arr[i];
//         }
//         else if(arr[i]%2===0 && arr[i]>secondlargest && arr[i]!==largest){
//             secondlargest = arr[i];
//         }
//     }
//     return secondlargest;
// }

// console.log(secondlargestEven([1,2,3,4,5,6,7,8]))
