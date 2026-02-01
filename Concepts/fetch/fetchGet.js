//fetch get basic

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=>{
    if(!response.ok){
        throw new Error('Response was no ok')
    }
    return response.json()
})
.then(data=>console.log(data))
.catch(err=>console.log('Fetch error',err))

//fetch with async

async function fetchPost(){
    try {
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts/2');
        if(!response.ok) throw new Error('Response was no ok');
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log('Fetch error')
    }
}

fetchPost();