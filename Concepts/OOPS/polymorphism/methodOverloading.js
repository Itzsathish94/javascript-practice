class Calculator{
    add(a,b,c=0){
        return a+b+c;
    }
}

const newCalculator = new Calculator();

console.log(newCalculator.add(1,2));
console.log(newCalculator.add(1,2,3));