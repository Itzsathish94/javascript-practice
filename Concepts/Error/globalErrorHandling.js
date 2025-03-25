window.onerror = function(message,source,lineno,colno,error){
    console.log(`ERROR: ${message}`);
    console.log(`SOURCE: ${source}`);
    console.log(`LINE: ${lineno}`);
    console.log(`COLUMN: ${colno}`);
    console.log(`ERR: ${error}`);
}

throw new Error('OOPS!, Global error');