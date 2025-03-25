//String operations...........................................................................................................

//[1]Reverse a string:
// function reverseSTR(text){
//     const output=text.split(' ').reverse().join(' ')
//     console.log(output)
// }
// reverseSTR('My name is Sathish')
    
//[2]Palindrome:
// const isPalindrome=str=>{
//     const cleanstr=str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
//     const reversestr=cleanstr.split('').reverse().join('')
//     if (cleanstr===reversestr){
//         console.log("Given string is a palindrome")
//     }
//     else{
//         console.log("Given string is not a palindrome")
//     }
// }
// isPalindrome("Malayalam")

//[3]Anagram
// function isAnagram(str1,str2){
//     const sortedstr1=str1.toLowerCase().replace(/[^a-zA-Z0-9]/g,'').split('').sort().join('')
//     const sortedstr2=str2.toLowerCase().replace(/[^a-zA-Z0-9]/g,'').split('').sort().join('')
//     if(sortedstr1===sortedstr2){
//         console.log("Given strings are Anagram")
//     }
//     else{
//         console.log("Given strings are not Anagram")
//     }
// }
// isAnagram('Silent',"Listen")

// [4]Find the longest word
// function longestword(str){
//     let mystr=str.split(' ')
//     let longword=mystr[0]
//     for (let i=0;i<mystr.length;i++){
//         if (longword.length<mystr[i].length){
//             longword=mystr[i]
//         }
//     }
//     return console.log(`Longest word is ${longword}`)
// }

// longestword('My name is sathish')

//[5] Count no. of words in a string
// function countWords(str){
//     let numwords=str.split(' ').length
//     return console.log(`There are '${numwords}' words in the given string`)
// }
// countWords("My name is sathish")

//[6]Remove vowels
// function removeVowels(str){
//     return console.log(str.replace(/[aeiouAEIOU]/g,''))
// }
// removeVowels('Augmentation')

//check if vowels are there in string
// function checkVowels(str){
//     if(/[aeiouAEIOU]/.test(str)){
//     return console.log("Given string has vowels")
//     }
//     else{
//         console.log("Given string does not have vowels")
//     }
// }

// checkVowels("Terminate")

//check the number of vowels in a string
// function numVowels(str){
//     let count=0
//     for(let char of str){
//         if ('aeiouAEIOU'.includes(char)){
//             count++
//         }
//     }
//     return console.log(`The string has ${count} vowels`)
// }

// numVowels('Growth')

//[7] Count occurence of a specific character
// function countOccur(str,char){
//     let count=0
//     for(let i=0;i<str.length;i++){
//         if(str[i].toLowerCase()===char.toLowerCase()){
//             count++
//         }
//     }
//     return console.log(`The character '${char}' has repeated ${count} times`)
// }

// countOccur("Journey to the center of the earth",'e')

// [8]Remove Duplicates
// function removeDuplicates(str){
//     return console.log(str.replace(/(.)(?=.*\1)/g,''))
// }
// removeDuplicates('Helloloooo')

 // let result=''
    // for (let char of str){
    //     if(result.indexOf(char)===-1){
    //         result+=char;
    //     }
    // }
    // return console.log(result)


// [9]Search substring
// function searchSubstr(str,substr){
//     let index=str.indexOf(substr)
//     if(index !==-1){
//         return console.log(`Subtring '${substr}' found at index ${index} of the given string`)
//     }
//     else{
//         return console.log(`Substring not found in the given string`)
//     }
// }

// searchSubstr('My name is sathish','i')

//[10]Capitalize first letter of each word
// function TitleCase(str){
//     let words=str.split(' ')
//     let TitleCase=words.map(word=>{
//             return word[0].toUpperCase()+word.slice(1)
//     })
//     return console.log(TitleCase.join(' '))
// }

// TitleCase('my name is sathish')

//[11]Character frequency
// const str = 'hello world'
// function charFrequency(str){
//     frequencies = {}
//     for(let char of str){
//         if(frequencies[char]){
//             frequencies[char]++
//         }
//         else{
//             frequencies[char]=1
//         }
//     }
//     return frequencies
// }
// // console.log(charFrequency(str))

// [12]Non-repeating chars in a string
// const str = 'hellol'
// function unique(str){
//     unique=[]
//     sortedStr=str.split('').sort().join('')
//     for(let i=0;i<str.length;i++){
//         if(sortedStr[i]!==sortedStr[i-1]&&sortedStr[i]!==sortedStr[i+1]){
//             unique.push(sortedStr[i])
//         }
//     }
//     return unique.join(',')
// }

// console.log(unique(str));

//[13]Secondlongest word in a sentence
// const str = 'My sathish is name';

// function secondLongest(str){
//     let longest ='';
//     let secondLongest ='';
//     let flag = 0;
//     for(let i=0;i<=str.length;i++){
//         if(i===str.length || str[i]===' '){
//             let word = str.slice(flag,i);
//             if(word.length > longest.length){
//                 secondLongest = longest;
//                 longest = word;
//             }
//             else if(word.length > secondLongest.length && word !== longest){
//                 secondLongest = word;
//             }
//             flag = i + 1;
//         }
//     }
//     return secondLongest;
// }

// console.log(secondLongest(str));

//[14] Reverse in place
// let str = 'my name is sathish';

// function reverseInPlace(str){
//     let result ='';
//     let word = '';
//     for(let i=0;i<=str.length;i++){
//         if(i<str.length && str[i]!==' '){
//             word = str[i]+word;
//         }
//         else{
//             result+=word+(i<str.length? ' ' : '');
//             word = '';
//         }
//     }
//     return result;
// }

// console.log(reverseInPlace(str));



