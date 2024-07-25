
const array = [1, 2, 3, 4, 5, 6];

// concat the number using map method

const concatMap = array.map((x) => "Number " + x);

console.log("concatMap", concatMap);

// double the numbers using foreach method
// below is an acumulator pattern
const doubleItem = [];
array.forEach((x) => {
  doubleItem.push(x * 2);
});

console.log("doubleItem", doubleItem);
