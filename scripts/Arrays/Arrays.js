let x;

// array literal

const array = [12, 14, 16, 20, 25];

// Array constructor

const fruits = new Array("apple", "banana", "grape", "orange");

x = array[1];

// concatinating the arrays

x = array[0] + array[4];

// get the favourite fruit from the array constructor

x = `My favourite fruit is ${fruits[0]}`;

// get the length of an array

x = array.length;

// Adding the items in an array

fruits[4] = "pineapple";

// Updating the existing items in an array

fruits[2] = "Pomegranate";

console.log(fruits);
console.log(x);
