function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operator";
  }
  return result;
}

const add = calculator(5, 2, "+");
const substract = calculator(5, 2, "-");
const multiply = calculator(5, 2, "*");
const divide = calculator(5, 2, "/");

console.log("add", add);
console.log("substract", substract);
console.log("multiply", multiply);
console.log("divide", divide);
