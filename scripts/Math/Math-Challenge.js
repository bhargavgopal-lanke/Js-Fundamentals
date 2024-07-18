// create a random number in between 1 and 100

let x1 = Math.random() * 100 + 1;

x1 = Math.floor(x1);

// create a random number in between 1 and 50

let y1 = Math.random() * 50 + 1;

y1 = Math.floor(y1);

const sumOutput = x1 + y1;

console.log("sumOutput", sumOutput);

const differenceOutput = x1 - y1;

console.log("differenceOutput", differenceOutput);

const productOutput = x1 * y1;

console.log("productOutput", productOutput);

const quotientOutput = x1 / y1;

console.log("quotientOutput", quotientOutput);

const remainderOutput = x1 % y1;

console.log("remainderOutput", remainderOutput);
