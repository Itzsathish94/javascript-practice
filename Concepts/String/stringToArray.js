let str = 'Hello';
let val = '[1,2,3]'

//1
console.log(str.split(''));

//2
console.log([...str]);

//3
console.log(Array.from(str));

//4
console.log(Object.assign([],str));

//5
console.log(Array.from(str,char=>char.toLocaleUpperCase()));

//6
console.log(JSON.parse(val));
