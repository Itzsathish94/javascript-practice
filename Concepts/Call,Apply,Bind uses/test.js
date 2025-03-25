//Method borrowing

const person1 = {
    name:'sathish',
    greet(age){
        return `Hi iam ${this.name} and Iam ${age} years old!`
    }
}
const person2 = {name:'alice'};
console.log(person1.greet.call(person2,25));
console.log(person1.greet.apply(person2,[45]));
const boundGreet = person1.greet.bind(person2,44);
console.log(boundGreet());

//Binding this
const user = {
    name:'Wonder',
    greet(){
        console.log(`Hi, im ${this.name}`);
    }
};

setTimeout(user.greet,1000);
setTimeout(user.greet.bind(user),1000);
