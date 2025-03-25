function outer(){
    let a = 'Value';
    return function inner(){
        a += ' modified';
        console.log(a);
    }
}

let printValue = outer();
printValue();