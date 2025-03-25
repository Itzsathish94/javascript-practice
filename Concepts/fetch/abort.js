const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/posts",{signal})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log('Fetch aborted',err));

setTimeout(()=>controller.abort(),100);