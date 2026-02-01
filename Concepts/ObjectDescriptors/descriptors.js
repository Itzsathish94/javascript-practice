//Property descriptors - value, writable, enumerable, configurable 

let person = {
    name:'Sathish'
}

Object.defineProperty(person,'age',{
    value:12,
    writable:false,
    enumerable:true,
    configurable:false
});

console.log(person);
console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertyDescriptor(person,'age'));

//Accessor descriptors - getter, setter

let user = {
    _name:'kumar',

    get name(){
        console.log('Fetching name....');
        return this._name;
    }
    ,
    set name(newName){
        console.log(`Setting new name... ${newName}`);
        this._name = newName
    }
};


console.log(user.name);
user.name = 'Changed'

