// challenge 1
// print log the numbers from 1 to 100

for (i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// looping through the arrays.
const items = ["book", "table", "chair", "kite"];

for (const i of items) {
  console.log("array output", i);
}

for (let i = 0; i < items.length; i++) {
  console.log("array", items[i]);
}

items.forEach((val, index, arr) => {
  return console.log(
    "foreach array",
    `
   index value => ${index} -
    val => ${val} -
   array => ${arr}`
  );
});

// we can do the logic inside a function and pass it in the forEach method.
function itemsFunction(item) {
  return console.log("function items", item);
}

items.forEach(itemsFunction);

// looping through the objects
const users = [{ name: "Bhargav" }, { name: "Gopal" }, { name: "Steve" }];

for (const user of users) {
  console.log("object output", user.name);
}

for (let i = 0; i < users.length; i++) {
  console.log("object", users[i].name);
}

users.forEach((val) => {
  return console.log("foreach object", val.name);
});

// loop over strings

const str = "Hello Bhargav";

for (let i = 0; i < str.length; i++) {
  console.log("i", str[i]);
}

for (const string of str) {
  console.log("string loop", string);
}

// for in loop

const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "orange",
  color4: "yellow",
  color5: "pink",
};

for (const key in colorObj) {
  console.log("colorObj", key, colorObj[key]);
}

const colorsArr = ["red", "green", "blue", "yellow"];

for (const key in colorsArr) {
  console.log("colorsArr1", colorsArr[key]);
}
