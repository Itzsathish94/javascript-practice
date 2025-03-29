function deepFreeze(obj){
    const propNames = Object.keys(obj);
    for(let name of propNames){
        const value = obj[name];
        if(value && typeof value === 'object'){
            deepFreeze(value);
        }
    }
    return Object.freeze(obj);
}