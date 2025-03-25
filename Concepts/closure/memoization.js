function add(...args){
    return args.reduce((acc,curr)=>acc+curr);
}

function memoize(fn){
    let cache = {};
    return function(...args){
        let key = args.join(',');
        if(cache[key]){
            console.log('Fetching from cache:', key);
            return cache[key];
        }
        else{
            console.log('Computing result for:', key);
            let result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1,1,1));