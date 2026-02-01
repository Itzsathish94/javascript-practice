//[1]Create a Promise that resolves after 2 seconds and logs a message.

// function logHi(){
//     return new Promise((res)=>{
//         setTimeout(() => {
//             res('Hi');
//         }, 2000);
//     })
// };

// logHi().then(res=>console.log(res)).catch(err=>console.log(err));

//[2] Use async/await to fetch mock data (can simulate with setTimeout). - refer concepts -> fetch

//[3] Implement a function that prints numbers 1-5 with 1s delay using async/await.

// function delay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// };

// async function printNumbers(){
//     try {
//         for(let i=1;i<=5;i++){
//             console.log(i);
//             await delay(1000)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// };

// printNumbers();