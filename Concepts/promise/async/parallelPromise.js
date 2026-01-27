function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data 1 received!"), 2000);
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data 2 received!"), 2000);
    });
}


async function parallel(){
    try{
        let [a,b] = await Promise.all([fetchData1(),fetchData2()]);
        console.log(a,b);
    }
    catch(err){
        console.log(err);
    }
}

parallel();

