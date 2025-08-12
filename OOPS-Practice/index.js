class User{

    static numOfUsers = 0;

    constructor(name,age){
        this.name = name;
        this.age = age;
        User.numOfUsers++
    };

    login(){
        console.log('Hi',this.name);
        console.log('You are logged in');
    }

    logout(){
        console.log('You are logged out');
    }

    static displayTotalUsers(){
        console.log(User.numOfUsers);
    }
}

const user1 = new User('Sathish',45);
user1.login();
console.log(User.numOfUsers);
User.displayTotalUsers();

class PaidUser extends User{
    constructor(name,age){
        super(name,age);
        this.storage = 100;
    }
    message(){
        console.log('You have 100gb free usage');
    }
    login(){
        console.log('Thank you for your support'); //overriding 
        return this;
    }
}

const user3 = new PaidUser('Jon',12);
user3.message();


//method chaining

user3.login().message();


///get set

class Temperature{
    constructor(temp){
        this._temp = temp;
    }

    get temp(){
        return  `Temperature is ${this._temp} deg celsius` 
    }

    set temp(temp){
        if(temp > 100){
            temp = 100;
            this._temp = temp;
        }
    }
}

const temp1 = new Temperature(150);

console.log(temp1.temp);