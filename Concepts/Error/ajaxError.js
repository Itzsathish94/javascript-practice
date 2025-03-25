async function getUser(){
    try{
        const response = fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok) throw new Error(`HTTP ERROR:${response.status}`);
        let data = (await response).json();
        console.log(data);
    }
    catch(err){
        console.log('AJAX error:',err.message);
    }
}

getUser();