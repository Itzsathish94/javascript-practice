//Array operations................................................................................................................

//[1]Reverse an array without reverse()
// function reverseArr(arr) {
//     let left = 0, right = arr.length - 1;
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--;
//     }
//     return arr;
// }

// reverseArr([1,2,3,4,5])

//[2]Largest num in Array
// function largestNum(arr){
//     return arr.reduce((largest,curr)=>curr > largest ? curr : largest,-Infinity);
// }
// largestNum([1,2,3,4,5])

//[3]sum of all numbers in array
// function sum(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return console.log(sum)
// }
// sum([1,2,3,4,5])

//[4]find if array is empty
// function emptycheck(arr){
//     if(arr.length<=0){
//         return "Array is empty"
//     }
//     else{
//         return "Array is not empty"
//     }
// }
// console.log(emptycheck([]))

//[5]add elements to array
// function addElements(arr,char1,char2){
//     arr.push(char1,char2)
//     return arr
// }
// console.log(addElements([1,2],3,4))

//[6]remove element
// function removeElement(arr,char){
//     let delchar=arr.indexOf(char)
//     arr.splice(delchar,1)
//     return arr
// }

// console.log(removeElement([1,2,3,4],3))

//[7]find if duplicates elements are present
// function duplicatetest(arr){
//     for(i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 return 'Array has duplicates' 
//             }
//         }
//     }
//  return "Array doesnt have duplicates"
// }

//[8]Array intersection
// function duplicateElem(arr1,arr2){
//     let duplicate=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//           if(arr1[i]===arr2[j] && !duplicate.includes(arr1[i])){
//             duplicate.push(arr1[i])
//             break;
//         }
//        }
//     }
//     return duplicate
// }

// const test1=[1,2,3,4,1,2,4]
// const test2=[1,4]
// console.log(duplicateElem(test1,test2))


//[9]removeduplicates
// function removeduplicates(arr){
//     newarr=[]
//     for (let i=0;i<arr.length;i++){
//         if(!newarr.includes(arr[i])){
//             newarr.push(arr[i])
//         }
//     }
//     return console.log(newarr)
// }
// removeduplicates([1,2,3,4,51,2,4,1,5,7,89,54,23,2,4,6,1])



// console.log(duplicatetest([1,2,3,4]))


//[10]concat arrays using spread operator
// function spreadconcat(arr1,arr2){
//     let output=[...arr1,...arr2]
//     return output
// }
// console.log(spreadconcat([1,2],[3,4]))

//[11]Loop a string array and print their length in template literals
// function strArr(arr){
//     for(let word of arr){
//         console.log(`${word} - Length: ${word.length}`)
//     }
// }

// const stringarray=['sathish','kumar','baskaran']
// strArr(stringarray)

// [12]find unique elements in an array
// function uniqueElem(arr){
//     unique=[]
//     arr.sort()
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr[i-1] && arr[i]!==arr[i+1]){
//            unique.push(arr[i])
//         }
//     }
//     return unique
// }

// const testarray=[1,2,3,4,1,2,4,99]
// console.log(uniqueElem(testarray))

// [13]Prime and Sum
// const arr = [1, 2, 3, 4,5,6,7,8,9,10];
// function primeSum(arr){
//     function isPrime(num){
//         if(num<2){
//             return false
//         }
//     for(let i =2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
//     }
//     return arr.filter(isPrime).reduce((acc,curr)=>acc+curr)
// }

// console.log(primeSum(arr))

//[14] Flatten function
// function flattenArray(arr){
//     let result = [];
//     for(let item of arr){
//         if(Array.isArray(item)){
//             result.push(...flattenArray(item));
//         }
//         else{
//             result.push(item);
//         }
//     }
//     return result;
// }
// console.log(flattenArray([1,2,[2,3,[42]]]))

//[15]Second largest with reduce
// function secondLargest(arr){
//     let {largest, secondLargest} = arr.reduce(({largest,secondLargest},curr)=>{
//         if(curr>largest){
//             return {secondLargest:largest,largest:curr}
//         }
//         else if(curr>secondLargest && curr!==largest){
//             return {largest,secondLargest:curr}
//         }
//     },{largest:-Infinity,secondLargest:-Infinity});
//     return secondLargest;
// }

// console.log(secondLargest([1,2,3,4,5]));