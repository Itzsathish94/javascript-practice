setTimeout(() => {
    console.info('4. Execution of Timeout Callback Function'); 
}, 10);
setImmediate(() => {
    console.info('3. Execution of Immediate Callback Function'); 
});
process.nextTick(() => {
    console.info('2. Execution of NextTick Callback Function');
})
console.info('1. Execution of Main Module Ends');