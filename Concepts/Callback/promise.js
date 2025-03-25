function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('User fetched');
            resolve();
        },2000)
    })
}

function getOrders(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Fetched order');
            resolve();
        }, 2000);
    })
}

function getOrderDetails(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Fetched order details');
            resolve('Order: Samung Galaxy');
        }, 2000);
    })
}


getUser()
    .then(getOrders)
    .then(getOrderDetails)
    .then((details)=>console.log('Final data:',details))
    .catch((err)=>console.log('Error:',err));
    

//async
// async function fetchData(){
//     await getUser();
//     await getOrders();
//     const details = await getOrderDetails();
//     console.log('Final data:', details);
// }

// fetchData().catch((err)=>console.log("ERROR:",err));