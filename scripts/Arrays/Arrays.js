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

fruits[4] = "Pineapple";

// Updating the existing items in an array

fruits[2] = "Pomegranate";

fruits[fruits.length] = "Blueberry";
fruits[fruits.length] = "Peach";

console.log(fruits);
console.log("fruits.length", fruits.length);
console.log("array.length", x);

// array methods to manipulate the current array

// push method adds the item to end of an array
array.push(99);

// pop method remove the item at end of an array
array.pop();

// unshift method adds the item at begining of an array
array.unshift(22);

// shift method adds remove item at begining of an array
array.shift();

// // reverse the current array

arr.reverse();

// check if an items exists in the array
// this returns an boolean value

let y = arr.includes(20);

// find the index of an element using indexOf() method

let res = arr.indexOf(71);
