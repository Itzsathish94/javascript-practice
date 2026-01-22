// console.log(1 + "1"); //11
// console.log(1 - "1"); //0
// console.log(1 + +"1"); //2
// console.log("5" - "2"); //NaN
// console.log("10" / "5"); //NaN

// console.log(null == undefined); //true
// console.log(null === undefined); //false
// console.log([] == ![]); //true
// console.log([] == false); //true
// console.log("0" == false); //true

// console.log(typeof NaN); //Number
// console.log(NaN == NaN); //false
// console.log(isNaN("100px")); //true
// console.log(isNaN("100")); //false

// console.log(1 < 2 < 3); //true
// console.log(3 > 2 > 1); //false

// console.log("b" + "a" + + "a" + "a"); //baNaNa

// console.log({} === {});//false
// console.log([] === []);//false
// console.log([1,2,3] === [1,2,3]);//false

// console.log(typeof typeof 1); //string
// console.log(typeof typeof []); //string
// console.log(typeof typeof {}); //string

// const arr = [1,4,1,5,9,6,2,10,3];
// function sortMerge(arr){
//     let odd = [];
//     let even = [];
//     for(elem of arr){
//         if(elem%2===0){
//             even.push(elem);
//         }
//         else if(elem%2!==0){
//             odd.push(elem);
//         }
//     }
//     odd = odd.sort((a,b)=>b-a);
//     even = even.sort((a,b)=>a-b);
//     return [...odd,...even]
// };
// console.log(sortMerge(arr));

// let str = 'My name is sathish';

// function longestWord(str){
//     let word ='';
//     let longestWord ='';
//     for(let i=0;i<=str.length;i++){
//         if(i<str.length && str[i]!==' '){
//             word+=str[i];
//         }
//         else if(str[i]===' '){
//             word.length > longestWord.length ? longestWord = word : longestWord
//             word = ''
//         }
//     }
//     return longestWord;
// };

// console.log(longestWord(str));

// let str = 'malayalamm';

// function palindrome(str,left=0,right=str.length-1){
//     if(left > right) return true;
//     return str[left].toLowerCase() === str[right].toLowerCase() ? palindrome(str,left+1,right-1) : false
// }

// console.log(palindrome(str))

// const arr = [1,2,3,1,2,3,5,6,7,3,5,9,10,11];

// function findUnqiue(arr){
//     let freq = {};
//     let result = [];
//     let lowFreq = Infinity;
//     for(let elem of arr){
//         if(freq[elem]){
//             freq[elem]++;
//         }
//         else{
//             freq[elem] = 1;
//         }
//     }
//     let frequencies = Math.min(...Object.values(freq));
//     console.log(frequencies);
//     for(char in freq){
//         if(freq[char]===frequencies){
//             result.push(char)
//         }
//     }
//     return result;
// }

// function uniqueElem(arr){
//     let result = [];
//     for(let elem of arr){
//         if(arr.indexOf(elem)===arr.lastIndexOf(elem)) result.push(elem)
//     }
//     return result;
// }

// console.log(findUnqiue(arr));
// console.log(uniqueElem(arr));


