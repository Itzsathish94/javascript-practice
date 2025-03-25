class Car{
    constructor(name){
        this.name = name;
    }

    setSpeed(speed){
        this.speed = speed;
        return this;
    }

    setColor(color){
        this.color = color;
        return this;
    }
}

const myCar = new Car('BMW').setColor('Red').setSpeed(2000);
console.log(myCar);