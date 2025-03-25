function add(a,b){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let sum = a+b;
            resolve(sum);
        },1000)
    })
}

async function addTwoNumbers(a,b){
    try{
        // const data = await add(a,b);
        return await add(a,b);
    }
    catch(err){
        console.log(err);
    }
}

addTwoNumbers(2,3).then(console.log);