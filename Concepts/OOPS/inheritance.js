class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log('Animal sound.......')
    }
}

class Dog extends Animal{
    // constructor(name){
    //     super(name);
    // }
    makeSound(){
        console.log('Dog barks.........');
    }
}

const myDog = new Dog('Buddy');
myDog.makeSound();