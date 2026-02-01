//post 

async function createPost(){

    const postData = {
        title:'New book',
        body:'Hello fetch',
        userId:1
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postData)
        })

        const data = await response.json();
        console.log('Created post\n',data);

        
    } catch (error) {
        console.log(error)
    }
}

createPost();