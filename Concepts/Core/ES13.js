const arr = [1,2,3,4,5,6,7,8,9];

const sortedArr = arr.toSorted((a,b)=> b - a);
const reversed = arr.toReversed();
const spliced = arr.toSpliced(0,1,100);
const findLastOdd = arr.findLast(num=>num%2!==0);
const findLastOddIndex = arr.findLastIndex(num=>num%2!==0);

console.log(sortedArr);
console.log(reversed);
console.log(spliced);
console.log(findLastOdd);
console.log(findLastOddIndex);
console.log(arr);