// for ([initialExpression]; [conditionExpression]; [incerementExpression]) {
//   statement;
// }

// Initial Expression - Initialises a variable/counter
// Condition Expression - Condition that the loop will continue to run
// as long as it is met or until the condition is false.
// Increment Expression - Epression that will be executed after each iteration of the loop.
// Usually increments the variable.
// Statement - Code that will be executed each time the loop is run.
// To execute a `block` of code use the `{ }` syntax

// basic for loop example
// for (let i = 0; i <= 11; i++) {
//   if (i === 7) {
//     console.log("7 is my lucy number");
//   } else {
//     console.log("Number " + i);
//   }
// }

// nested loops

// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// loop through an array

// const names = ["bhargav", "Sam", "Sara", "John", "Tim"];

// for (let i = 0; i < names.length; i++) {
//   if (i === 0) {
//     console.log(names[i] + " is the best");
//   } else {
//     console.log(names[i]);
//   }
// }

// continue

// for (let i = 0; i <= 20; i++) {
//   if (i === 13) {
//     console.log("remove number 13");
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// while loop

let i = 0;

while (i <= 20) {
  console.log("While Number " + i);
  i++;
}

// loop over arrays using whoile loop

const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// nested loops using while

while (i <= 5) {
  console.log("Number " + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
