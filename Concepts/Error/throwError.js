function divide(a,b){
    if(b===0){
        throw new Error('Cant divide by zero!');
    }
    return a/b;
}

try{
    console.log(divide(1,0));
}
catch(err){
    console.log('Error Captured:',err.message);
}