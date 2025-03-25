//ARRAY - value of returns array itself, toString is used to convert it to string / JS first tries valueOf if doesnt return primitive,
//it tries toString
console.log([1,2,3].toString());
console.log([1,2,3].valueOf()); 
console.log([1,2,3]+4); //toString - typeCoersion
console.log([]+3); //toString - typeCoersion
console.log([]==''); //toString - typeCoersion

//OBJECT
console.log({name:'sathish'}.valueOf()); // returns object itself
console.log({}.valueOf());
console.log({}.toString());

///valueOf is Object.protoype method doesnt exist in Array.protoype, whereas toString exists in both so Array.prototype overrides Object.prototype toString();


