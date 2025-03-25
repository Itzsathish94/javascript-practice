function Person(name){
    this.name = name;
}

Person.prototype.greet = function(){
    return `Hello, Iam ${this.name}`;
}

const user3 = new Person('Hank');
console.log(user3.greet());