const obj = {1:2,2:3,3:4};

function highestKey(obj){
    let largeValue = -Infinity;
    let largeKey = null;
    for(let key in obj){
        if(obj[key]>largeValue){
            largeValue = obj[key]
            largeKey = key;
        }
    }
    return largeKey;
};

console.log(highestKey(obj));

