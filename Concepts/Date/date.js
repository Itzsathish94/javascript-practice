//JavaScript stores dates as milliseconds since January 1, 1970, UTC (Unix Epoch time).

//Date creation methods

console.log(new Date());
const now = new Date(2024,2,3,12,34,56)
console.log(now);
console.log(new Date(121212121212)); //milliseconds to date from epoch
console.log(Date.now()); //milliseconds since epoch

// Unit	Milliseconds
// 1 Second	1000 ms
// 1 Minute	60,000 ms
// 1 Hour	3,600,000 ms
// 1 Day	86,400,000 ms

//getter

// const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

//setter

// let date = new Date();

// date.setFullYear(2025);
// date.setMonth(5);   // June (since months are 0-based)
// date.setDate(15);   // 15th day
// date.setHours(10);  // 10 AM
// date.setMinutes(45);
// date.setSeconds(30);

// console.log(date);

///Internationlization of DateTime

let date = new Date();

// US Format
console.log(new Intl.DateTimeFormat("en-US").format(date)); 
// Output: 3/3/2024

// UK Format
console.log(new Intl.DateTimeFormat("en-GB").format(date)); 
// Output: 03/03/2024

// India Format
console.log(new Intl.DateTimeFormat("en-IN").format(date)); 
// Output: 03/03/2024

let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// Output: Sunday, March 3, 2024

date.setDate(date.getDate()-2)
console.log(date.toDateString())