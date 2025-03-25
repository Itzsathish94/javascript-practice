function delayedMessage(message,delay){
    setTimeout(() => {
        console.log(message);
    }, delay);
}

delayedMessage('Callback exceuted',2000);