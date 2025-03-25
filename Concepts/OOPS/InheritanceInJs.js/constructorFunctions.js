function Animal(name){
    this.name = name;
}

Animal.prototype.makeSound = function(){
    console.log('Some Sound');
};

function Dog(name){
    Animal.call(this,name);
};

Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog('Buddy');
myDog.makeSound();

