//Intl.of Number
// const number = 123456.789;
// const formatted = new Intl.NumberFormat('en-us',{
//     style:'currency',
//     currency:'USD'
// }).format(number);
// console.log(formatted);

let number = 2500000;
console.log(number.toLocaleString('en-In',{style:'currency',currency:'INR',notation:'compact',compactDisplay:'long'}));

console.log(number.toLocaleString("en-US")); 
console.log(number.toLocaleString("de-DE")); 
console.log(number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })); 

