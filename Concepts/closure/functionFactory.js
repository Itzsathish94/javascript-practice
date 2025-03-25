function power(exponent){
    return function(base){
        return Math.pow(base, exponent)
    }
};

const squared = power(2);
const cube = power(3);

console.log(squared(2));
console.log(cube(2));