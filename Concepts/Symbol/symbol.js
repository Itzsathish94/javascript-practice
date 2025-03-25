//////Always unique

// const id1 = Symbol('#');
// const id2 = Symbol('#');
// console.log(id1===id2);

/////Defends accidental modification of object keys

// const userID = Symbol('userId');
// const user = {
//     name:'Sathish',
//     [userID] : 12345
// }
// console.log(user);
// console.log(typeof userID);
// user.userID = 2;
// console.log(user);

//////Hidden in Object.keys

// const secret = Symbol('Hidden');
// const user = {
//     name:'sathish',
//     age:11,
//     [secret] : 'Alert'
// }


