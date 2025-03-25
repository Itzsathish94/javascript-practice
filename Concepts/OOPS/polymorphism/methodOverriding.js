class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log('Animal sound.......')
    }
}

class Dog extends Animal{
    makeSound(){
        console.log('Dog barks.........');
    }
}

class Cat extends Dog{
    makeSound(){
        console.log('Cat meows.........')
    }
}

const myCat = new Cat('Nile');
myCat.makeSound();