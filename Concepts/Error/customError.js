class customError extends Error{
    constructor(message){
        super(message)
        this.name = 'Custom Error'
    }
}

try{
    throw new customError('Something went wrong terribly');
}
catch(err){
    console.log(`${err.name}: ${err.message}`)
}