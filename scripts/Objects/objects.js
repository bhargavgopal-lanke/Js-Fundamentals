let x;

const obj = {
  name: " bhargav123",
  age: 28,
  isAdmin: true,
  address: {
    street: "123 main street",
    city: "Hyderabad",
    state: "Telangana",
  },
  hobbies: ["sports", "reading"],
};

// destructuring using . notation
x = obj.name;

// destructuring using bracket notation
x = obj["name"];

x = obj.address["street"];
x = obj.address["state"];
x = obj.hobbies;
x = obj.hobbies[0];

// updating the object

obj.isAdmin = false;
obj.address.city = "Andhra Pradesh";

delete obj.hobbies;

obj.newfunction = function () {
  console.log(`hello my name is ${this.name}`);
};

obj.newfunction();

const obj2 = {
  "first Name": "Gopal",
  "Last Name": "Lanke",
};

x = obj2["first Name"];
x = obj2["Last Name"];


console.log("obj", x);
