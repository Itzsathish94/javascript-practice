function getUser(callback){
    setTimeout(()=>{
        console.log('User fetched');
        callback();
    },2000)
}

function getOrders(callback){
    setTimeout(() => {
        console.log('Fetched orders');
        callback();
    }, 2000);
}

function getOrderDetails(callback){
    setTimeout(() => {
        console.log('Fetched order details')
        callback('Order : Samsung Galaxy')
    }, 2000);
}

getUser(()=>{
    getOrders(()=>{
        getOrderDetails((details)=>{
            console.log('Final data', details);
        })
    })
})
