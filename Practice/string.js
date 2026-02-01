//[1]Reverse a string without using .reverse(). - refer operations string

//[2]Count vowels and consonants in a string.

// function count(str){
//     let vowels = /[aeiouAEIOU]/;
//     let vowelCount = 0;
//     let consonantCount = 0;

//     for(let char of str){
//         if(/[a-zA-z]/.test(char))  char.match(vowels) ? vowelCount++ :   consonantCount++;
//     }

//     return `Vowel count -> ${vowelCount}, Consonant count ${consonantCount}`; 
// }

// console.log(count('aeJKee! !'))

//[3]Check if a number is prime, and generate first N primes.

// function isPrime(num){
//     if(num<2) return false;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0) return false;
//     }
//     return true;
// }

// function printPrime(num){
//     let count = 0;
//     let number = 0;
//     while(count < num){
//         if(isPrime(number)){
//             console.log(number);
//             count++
//         }
//         number++;
//     }
// };

// printPrime(5);

//[4]Replace all vowels in a string with * - refer -> operations string

//[5]Convert string to “Title Case” (capitalize first letter of each word). - refer -> operations string