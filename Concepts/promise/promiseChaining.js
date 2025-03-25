function firstStep(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Step 1 complete')
            resolve('Data from step 1"')
        },1000)
    })
}

function secondStep(previousData){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Step 2 completed using:',previousData)
            resolve('Data from step 2')
        },1000)
    })
}

function thirdtStep(previousData){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Step 3 completed using:',previousData)
            resolve('Data from step 3')
        },1000)
    })
}

firstStep()
.then(secondStep)
.then(thirdtStep)
.then((finalResult)=>console.log('Final output',finalResult))
.catch((error) => console.error("Error occurred:", error));


// function add(a,b){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             let sum = a+b;
//             resolve(sum);
//         },1000)
//     })
// }

// function double(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(num*2)
//         },1000)
//     })
// }

// add(2,3)
// .then(double)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))