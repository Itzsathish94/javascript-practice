let str = 'Hello';

console.log(str[1]); //No negative access, returns undefined for out of bounds
console.log(str.charAt(1)); ////No negative access, returns '' for out of bounds
console.log(str.at(-1)); // Negative access, returns undefined for out of bounds
console.log(str.slice(1,2)); //extracts portion of string, Negative access
console.log(str.substring(1,2)); //similar to slice (negatives are treated as zero, if start > end -- swapped)
console.log(str.split('')[1]); //converts to array and same as []
console.log(str.charCodeAt(1)); //Return unicode value of character






