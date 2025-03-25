class Car{
    #startEngine(){
        console.log('Starting engine');
    }
    drive(){
        this.#startEngine();
        console.log('Driving....');
    }
}

const myCar = new Car();
myCar.drive();
