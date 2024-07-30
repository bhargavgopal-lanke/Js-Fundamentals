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
for (let i = 0; i <= 11; i++) {
  if (i === 7) {
    console.log("7 is my lucy number");
  } else {
    console.log("Number " + i);
  }
}
