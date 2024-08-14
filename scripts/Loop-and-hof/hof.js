const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("evenNumbers", evenNumbers);

// same with forEach

const evenNumbers1 = [];

const result = evenNumbers.forEach((nums) => {
  if (nums % 2 === 0) {
    evenNumbers1.push(nums);
  }
});

console.log("evenNumbers1", evenNumbers1);

// hof challenge
const words = ["words", "programmer", "developer"];

const capitalWords = words.map((val) => {
  return val[0].toUpperCase() + val.slice(1, val.length);
});

console.log("capitalWords", capitalWords);
