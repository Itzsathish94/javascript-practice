//[1] Reverse string

// let str = 'Hello';
// for(let i=str.length-1;i>=0;i--){
//     str+=str[i];
// }
// console.log(str.slice(str.length/2));

// function reverseString(str){
//     let output = '';
//     for(let i=str.length-1;i>=0;i--){
//         output += str[i]
//     };
//     return output;
// };
// console.log(reverseString(str));

// let reversed = [...str].reduce((acc,char)=>char+acc,'');
// console.log(reversed);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//[2] Count vowels in a string
// let str = 'hello';
// function countVowels(str){
//     let count = 0;
//     for(let char of str){
//         'aeiouAEIOU'.includes(char) ? count ++ : count;
//     }
//     return count;
// }
// console.log(countVowels(str));

// function countVowels(str) {
//     return (str.match(/[aeiou]/gi) || []).length;
// }
// console.log(countVowels('hello')); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//[3] Remove duplicates from string
// let str = 'hello';
// function removeDuplicates(str){
//     let result = '';
//     for(char of str){
//         if(!result.includes(char)) result +=char;
//     }
//     return result;
// }
// console.log(removeDuplicates(str));

//[4]  write a function to find the extra char that is in t but not in 2
// let s = "abcd" , t = "bcadef";
// function extraCharacter(t,s){
//     let freq = {};

//     for(let char of t){
//         freq[char] = (freq[char] || 0)+1;
//     }

//     for(let char of s){
//         freq[char]--
//     }

//     for(let key in freq){
//         if(freq[key] > 0) return key;
//     }
// }

// console.log(extraCharacter(t,s));