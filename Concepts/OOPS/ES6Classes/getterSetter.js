class User{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

const user4 = new User('Mike');
console.log(user4.name);
user4.name = 'NameChanged';
console.log(user4.name);