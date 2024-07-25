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
