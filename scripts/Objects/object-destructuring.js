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

const [one, two, ...nums] = desArray;

console.log("array destructuring ", one, nums);

// json.stringify

const post = {
  id: 1,
  name: "Bhargav",
  user: "test",
};

// coverts the object data into json data
const str = JSON.stringify(post);

// convert the JSON data to object data
const parse = JSON.parse(str);
console.log("str", str);
console.log("parse", parse);
