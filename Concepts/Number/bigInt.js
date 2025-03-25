//BIGINT - JS uses 64 bit floating point precision tp represnt numbers
//which follows IEEE 754 double-precision floating-point standard
//JS has accuracy upto 2^53-1 (approx 9 quadrillion) - Number.MAX_SAFE_INTEGER


//A 64-bit floating-point number is divided into three parts:
//Sign Bit (S)	1	Determines if the number is positive (0) or negative (1)
//Exponent (E)	11	Stores the exponent in biased representation (offset of 1023)
//Mantissa (Fraction) (M)	52	Stores the significant digits of the number

let bigNum = 1111111111111111111111111111111111111111n;
console.log(bigNum + 1n);
console.log(typeof bigNum);

