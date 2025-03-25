function areaOfSquare(side){
    return side * side;
}

function areaOfRectangle(length,width){
    return length * width
}

//instead

function calculateArea(shape,...args){
    return shape === 'square' ? args[0] * args[0] : args[0] * args[1];
}

console.log(calculateArea('square',5));
console.log(calculateArea('a',5,2));