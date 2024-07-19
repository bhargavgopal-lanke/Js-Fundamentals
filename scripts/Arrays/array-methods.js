// In Js the scripts runs from the top to bottom

const arr = [14, 20, 32, 16, 71];

// the first parameter of slice is the start index value
// and the second parameter is the last index value
// it gives the remaining values of the array from that position
// slice doesn't modify the existing array and returns the new array
x = arr.slice(1, 4);

// using splice we can remove an single element from ana arry
// firts parameter is the index position of the array.
// second parameter gives the number of values to be removed.
// it modifies the existing array
// x = arr.splice(3, 1);

//  concatinating tha array methods
// chaning the array methods
x = arr.splice(1, 4).reverse().toLocaleString().charAt(6);

// console.log("x => ", x);
// console.log("res", res);

let n;
const newFruits = ["apple", "pear", "guava"];
const berries = ["strawberry", "blueberry", "rasberry"];

// nesting the arrays
// newFruits.push(berries);
// to access the items inside an nested array
// n = newFruits[3][1];

let allFruits = [newFruits, berries];

n = allFruits[1][0];

n = newFruits.concat(berries);

// spread operator (...spread)

n = [...newFruits, ...berries];

console.log("newFruits", n);
