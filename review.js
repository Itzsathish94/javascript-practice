const str = 'my name is basha';

let arrStr = str.split(' ');

let titleCase = arrStr.map(word=>word.slice(0,-1) + word.slice(-1).toUpperCase()).join(' ')

console.log(titleCase);