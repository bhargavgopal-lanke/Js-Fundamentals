const firstName = "Bhargav";
const lastName = "Lanke";
const age = 28;

// if the value is a variable and key also same then we dont have to add both
const desObj = {
  firstName,
  lastName,
  age,
};

console.log("desObj", desObj.age);

// destructuring

const desTodo = {
  id: 1,
  title: "take out trash",
  user: {
    name: "Bhargav",
  },
};

const {
  id,
  title,
  user: { name },
} = desTodo;

console.log("Object Des", name);

// Destruture arrays

const desArray = [23, 67, 33, 49, 52, 60];

const [one, two, ...rest] = desArray;

console.log("array destructuring ", one, rest);
