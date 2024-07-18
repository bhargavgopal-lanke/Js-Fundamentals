let x;

// to find the square root of an number

x = Math.sqrt(9); // 3

// absolute return a positive value even if the value is negative

x = Math.abs(-5);

// to get the round figure value of an number use round method
// based on values below or above 0.5 we will get the round figure value

x = Math.round(4.4);

// if the round figure value is anything in between 0.1 to 0.9 Math.ceil() method always give high round figure value

x = Math.ceil(4.1);

// if the decimal value is in between .1 to .9 Math.floor() method always returns the lowest decimal value

x = Math.floor(4.9);

// power in math

x = Math.pow(2, 5); // 32

// find the max number which are passed inside the Math.max() method.

x = Math.max(2, 31, 4, 25);

// find the min number which are passed inside the Math.min() method.

x = Math.min(2, 31, 4, 25);

// how to generate a number in between 1 to 10 using Math.random() method.

// this will give a decimal in between 1 and 10.
x = Math.random() * 10 + 1;
let y = Math.floor(x);

// this will give a decimal in between 1 and 100.
x = Math.random() * 100 + 1;
let z = Math.floor(x);
console.log(z);
