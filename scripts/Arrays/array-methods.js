// In Js the scripts rus from the top to bottom

const arr = [14, 20, 32, 16, 71];

// array methods to manipulate the current array

// push method adds the item to end of an array
// arr.push(99);

// // pop method remove the item at end of an array
// arr.pop();

// // unshift method adds the item at begining of an array
// arr.unshift(22);

// // shift method adds remove item at begining of an array
// arr.shift();

// // reverse the current array

// arr.reverse();

// check if an items exists in the array
// this returns an boolean value

let y = arr.includes(20);

// find the index of an element using indexOf() method

let res = arr.indexOf(71);

// the first parameter of slice is the start index value
// and the second parameter is the last index value
// it gives the remaining values of the array from that position
// slice doesn't modify the existing array and returns the new array
x = arr.slice(1, 4);

// using splice we can remove an single element from ana arry
// firts parameter is the index position of the array.
// second parameter gives the number of values to be removed.
// it modifies the existing array
x = arr.splice(3, 1);

console.log("x", x);
console.log("res", res);
