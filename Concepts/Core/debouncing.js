function debounce(func,delay){
    let timer
    return function(...args){
        clearTimeout(timer);
       timer = setTimeout(() => {
            func.apply(this,args);
        }, delay);
    }
};


function searchQuery(str){
    console.log('Searching query',str)
}

const debouncedSearch = debounce(searchQuery,4000);

debouncedSearch('abc');
debouncedSearch('abc');
