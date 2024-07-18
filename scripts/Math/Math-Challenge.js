// create a random number in between 1 and 100

let x1 = Math.random() * 100 + 1;

x1 = Math.floor(x1);

// create a random number in between 1 and 50

let y1 = Math.random() * 50 + 1;

y1 = Math.floor(y1);
let sum = x1 + y1;
const sumOutput = `${x1} + ${y1} = ${sum}`;

console.log("sumOutput", sumOutput);

let substract = x1 - y1;
const differenceOutput = `${x1} - ${y1} = ${substract}`;

console.log("differenceOutput", differenceOutput);

let multiply = x1 * y1;
const productOutput = `${x1} * ${y1} = ${multiply}`;

console.log("productOutput", productOutput);

let division = x1 / y1;
const quotientOutput = `${x1} / ${y1} = ${division}`;

console.log("quotientOutput", quotientOutput);

let ramainder = x1 % y1;
const remainderOutput = `${x1} % ${y1} = ${ramainder}`;

console.log("remainderOutput", remainderOutput);
