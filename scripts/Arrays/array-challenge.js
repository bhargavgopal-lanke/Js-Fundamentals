// ad 6 and 0 in the begining and end of the array

const challengeArray = [1, 2, 3, 4, 5];

challengeArray.push(0);
challengeArray.unshift(6);

console.log("challenge 1 =>", challengeArray);

// combine arr1 and arr2 into a new array arr3

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

let arr3;

arr2.splice(0, 1);

arr3 = [...arr1, ...arr2];

console.log("challenge 2 =>", arr3);
