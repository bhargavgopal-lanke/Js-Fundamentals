// object constructor
let t;
const objCons = new Object();

objCons.id = "1";
objCons.name = "Bhargav";
objCons.todo = "Buy Groceries";

console.log("objCons", objCons);

const person = {
  address: {
    coords: {
      lat: 42.456,
      long: -72.3121,
    },
  },
};

t = person.address.coords.lat;

const obj3 = { a: 1, b: 2 };
const obj4 = { c: 3, d: 4 };

const obj5 = { ...obj3, ...obj4 };

t = obj5;

const obj6 = Object.assign({}, obj3, obj4);

t = obj6;
// array of objects

const todos = [
  {
    id: 1,
    name: "buy milk",
  },
  {
    id: 2,
    name: "Pickup kids from school",
  },
  {
    id: 3,
    name: "Take out trash",
  },
];

t = todos[0].name;

t = Object.keys(objCons);

// t = Object.keys(objCons).length;

console.log("t", t);
