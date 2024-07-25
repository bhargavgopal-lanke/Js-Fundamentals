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

const age25 = people
  .filter((x) => x.age <= 25)
  .map((x) => ({
    name: x.firstName,
    age: x.age,
  }));

console.log("age25>>>>>>>>>", age25);
