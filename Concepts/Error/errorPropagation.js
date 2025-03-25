function riskyFunction(){
    throw new Error('Oops, New error thrown');
}

function caller(){
    riskyFunction();
}

try{
    caller()
}
catch(err){
    console.log('Caught',err.message)
}