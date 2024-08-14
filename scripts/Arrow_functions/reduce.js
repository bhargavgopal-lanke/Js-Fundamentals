const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com",
    phone: 111 - 111 - 111,
    age: 30,
  },
  {
    firstName: "John",
    lastName: "poe",
    email: "john@email.com",
    phone: 111 - 111 - 111,
    age: 22,
  },
  {
    firstName: "bob",
    lastName: "foe",
    email: "john@email.com",
    phone: 111 - 111 - 111,
    age: 21,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "john@email.com",
    phone: 111 - 111 - 111,
    age: 21,
  },
  {
    firstName: "Sara",
    lastName: "Sun",
    email: "john@email.com",
    phone: 111 - 111 - 111,
    age: 25,
  },
];

// find the persons age whose age is less than 25
// challenge 1
const age25 = people
  .filter((x) => x.age <= 25)
  .map((x) => ({
    name: x.firstName,
    age: x.age,
  }));

console.log("age25>>>>>>>>>", age25);

// challenge 2
// calculate the numbers which are greater than zero

const numbersReduce = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbersReduce
  .filter((x) => x > 0)
  .reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

console.log("positiveSum", positiveSum);

// challenge 3
// capitalie the text in the array

const captialArray = ["coder", "programmer", "developer"];

const capitalArrValue = captialArray.map((x) => {
  return x[0].toUpperCase() + x.slice(1, x.length);
});

console.log("capitalArrValue", capitalArrValue);

// reduce practice.

// convert object into an array
let arr = ["Bhargav", "24", "Sai", "24", "Gopal", "27"];

let emptyArray = [];
let arrObject = arr.reduce((acc, curr) => {
  let key;
  let val;

  emptyArray.push(curr);

  for (let i = 0; i < emptyArray.length; i++) {
    key = emptyArray[i];
    val = emptyArray[++i];
  }

  acc[key] = val;
  return acc;
}, {});

console.log("arrObject", arrObject);

// convert array into objects other way

const keyValuePairs = [
  ["username", "Bhargav"],
  ["membership", "1996-05-05"],
  ["age", 27],
];

const keyValueReduce = keyValuePairs.reduce((acc, curr) => {
  let key = curr[0];
  let val = curr[1];

  acc[key] = val;
  return acc;
}, {});

console.log("keyValueReduce", keyValueReduce);
