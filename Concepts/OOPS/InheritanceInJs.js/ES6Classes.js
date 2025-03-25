class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark!");
    }
}
const myDog2 = new Dog("Charlie");
myDog2.makeSound();
