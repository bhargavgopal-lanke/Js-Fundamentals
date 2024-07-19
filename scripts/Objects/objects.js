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

console.log("obj", x);
