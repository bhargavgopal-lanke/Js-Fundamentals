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

console.log("t", t);
