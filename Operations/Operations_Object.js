//Object Operations..................................................................................................................

//[1]Create object with constructor function
// function person(fname,lname,age){
//     this.firstname=fname
//     this.lname=lname
//     this.age=age
// }
// const myFather=new person('Jon','Krasinsky',45)
// console.log(myFather)

//Create object using object literal
// const person={
//     name:'Sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }
// console.log(person)

//Classes
// class Person{
//     constructor(fname,lname,age){
//         this.firstname=fname
//         this.lastname=lname
//         this.age=age
//     }
//     getfullname(){
//         return `${this.firstname}+' '+${this.lastname}`
//     }
// }

// const myMother=new Person('Tina','Mathews',50)
// console.log(myMother)

//[2]Check if an object is empty
// const obj={}
// if(Object.keys(obj).length===0){
//     console.log('Object is empty')
// }
// else{
//     console.log("object is not empty")
// }

// [3]Add properties and methods to existing object
//     const person={
//         name:'Sathish',
//         age:29,
//         company:"Brototype",
//         location:'Chennai'
//     }

// person.salary='Non disclosable'
// delete person.location
// person.greet=function(){
//     return ('HI iam '+this.name)
// }

// console.log(person.greet())

//[4]Check if property exists in an object
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }
// console.log('name' in person)

//[5]seal 
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// Object.seal(person)
// person.nationality='Indian'
// person.location='Thanjavur'
// console.log(person)

//[6]Freeze
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// Object.freeze(person)
// person.nationality='Indian'
// person.location='Thanjavur'
// console.log(person)

//[7]Destructure properties into variables
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// const {name,age,company}=person
// console.log(name)

//[8]Create method that access object properties
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// person.detail=function(){
//     return 'Iam '+this.name+' and I am '+this.age
// }

// console.log(person.detail())

//[9]Implement a method that modifies object properties
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai',
//     changelocation:function(newLocation){
//         this.location=newLocation
//     }
// }
// person.changelocation('Thanjavur')
// console.log(person)

//[10]Spread prpoerties
// const person={
//     name:'sathish',
//     age:29,
//     company:"Brototype",
//     location:'Chennai'
// }

// const person2={
//     ...person,
//     location:'Thanjavur'
// }
// console.log(person2)

// [11]var details=[
//     {name:"Vignesh",class:"12th",score:90,status:"PASS"},
//     {name:"Abin",class:"12th",score:91,status:"PASS"},
//     {name:"Nithina",class:"12th",score:85,status:"PASS"},
//     {name:"Logesh",class:"12th",score:96,status:"PASS"},
//     {name:"Harish",class:"12th",score:73,status:"PASS"},
// ]

// details.sort((a, b) => b.score - a.score);
// console.log(details[0].name);

//[12] Shallow copy and deep copy
//  const shallow={
//     name:'sathish',
//     age:28,
//     add: {
//         city: "chennai"
//     }
// }

// const shallo2={...shallow}

// shallo2.add.city=90
// shallow.age=5

// const deep=JSON.parse(JSON.stringify(shallow))
// deep.age=21
// deep.add.city=0
// console.log(shallow)
// console.log(deep)
// console.log(shallo2)


//[13]Deepfreeze
// function deepFreeze(object){
//     const propNames=object.keys(object)

//     for(const name of propNames){
//         const value=object[name]

//         if(value && typeof(value)==='object'){
//             deepFreeze(value)
//         }
//     }
//     return object.freeze(object)
// }
// // Example usage:
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// };

// deepFreeze(obj);

// obj.a = 10;  // Fails silently in non-strict mode
// obj.b.c = 20;  // Fails silently in non-strict mode

// console.log(obj.a);  // 1
// console.log(obj.b.c);  // 2
// console.log(Object.isFrozen(obj));  // true
// console.log(Object.isFrozen(obj.b));  // true
// console.log(Object.isFrozen(obj.b.d));  // true


