function deepFreeze(object){
    const propNames = Object.keys(object);
    for(let names of propNames){
        let value = object[names];
        if(value && typeof value === 'object'){
            deepFreeze(value);
        }
    }
    return Object.freeze(object)
}