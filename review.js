function getUser(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("user fetched")
            resolve();
        }, 1000);
    })
 
}

function getOrders(){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            console.log("Orders fetched")
            resolve();
        }, 1000);
    });
}

function getOrderDetails(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Fetched order details')
            resolve('Samsung galazu');
        }, 1000);
    });
}

getUser()
.then(getOrders)
.then(getOrderDetails)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))