const flying = {
    fly(){
        console.log(`${this.name} is flying....`)
    }
}

const swimming = {
    swim(){
        console.log(`${this.name} is swimming...`);
    }
};

class Bird{
    constructor(name){
        this.name = name;
    }
}

Object.assign(Bird.prototype,flying,swimming);

const penguin = new Bird('Penguin');
penguin.fly();
penguin.swim();