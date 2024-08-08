const personalInformation = {
  firstName: "Bhargav",
  lastName: "Lanke",
  city: "Charlotte",
  State: "Northa Carolina",
  zipCode: 1774,
};

const { firstName: fn, lastName: ln } = personalInformation;

console.log(`${fn}, ${ln}`);

// array destructure
const [one, two, three] = ["test", "test1", "test2"];

console.log(one, two, three);

// rest operator

const person = {
  name: "Gopal",
  age: 28,
  isMarried: false,
};

// update the name in another object using spread operator
const person2 = { ...person, name: "Gopal2" };

console.log(person2);

// add extra items to an array
// using spread operator

const names = ["Bhargav", "Gopal", "Lanke"];

const names2 = [...names, "suguna"];

console.log(names2);
