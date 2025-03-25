//OBJECT LITERAL//

// const person={name:'sathish',age:29,school:'ksms',get Details(){return 'Iam '+this.name}}
// console.log(person.Details)

//INITIALISATION WITH DOT NOTATION//
// const person2={}
// person2.name='Joe'
// person2.age=28
// person2.school="donbosco"

//INITIALISATION WITH CONSTRUCTOR//
// const person3=new Object()
// person3.name='Dam'
// person3.age=23
// person3.school="Chenai"

// console.log(person)
// console.log(person2)
// console.log(person3)

//CHANGING PROPERTY VALUE
// const x=person
// x.name='Diana'
// console.log(person)

//ADDDING METHODS TO OBJECT//
// person.details=function PrintDetails(){
//     return 'Iam'+' '+this.name+' '+'and I am'+' '+this.age+' '+'Years old'
// }
// console.log(person)

//ACCESSING OBJECTS//

//loops
// for (let x in person){
//     console.log(person[x])
// }

//dotnotation
// const myArray=Object.values(person)
// console.log(myArray)

//JSON.stringify
// let myString= JSON.stringify(person)
// console.log(myString)

//CREATING COUNTER//GETTER SETTER

// const obj={counter:0}

// Object.defineProperty(obj,'reset',{
//     get:function(){this.counter=0}
// });

// Object.defineProperty(obj,'increment',{
//     get:function(){this.counter++}
// })

// Object.defineProperty(obj,'decrement',{
//     get:function(){this.counter--}
// })

// Object.defineProperty(obj,'Add',{
//     set:function(value){this.counter += value}
// })

// Object.defineProperty(obj,'Subtract',{
//     set:function(value){this.counter -= value}
// })

// obj.Add=6
// console.log(obj.counter)

//OBJECT CONSTRUCTORS//

// function Person(fname,lname,age){
//     this.firstname=fname
//     this.lastname=lname
//     this.age=age
// }

// const myFather=new Person('John','Doe',29)
// myFather.nationality='English'
// myFather.details=function(){
//     return this.firstname+' '+this.lastname
// }

// Person.education='Collge'//cant do, add directly in function

// // console.log(myFather)

// //**since we cant prop or methods directly into construtors we use**/
// //PROTOTYPES//

// Person.prototype.greet=function(){return "Hi iam "+this.firstname}

// console.log(myFather.greet())



