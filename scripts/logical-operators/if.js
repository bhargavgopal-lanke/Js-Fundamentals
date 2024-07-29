if (true) {
  console.log("this is true");
}

if (false) {
  console.log("this is NOT true");
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else {
  console.log(`${x} is not greater than ${y}`);
}

// date example

const d = new Date();

const hour = d.getHours();
const minutes = d.getMinutes();

console.log("d", hour);
console.log("d minutes", minutes);

if (hour < 12) {
  console.log("Good Morning!");
} else if (hour > 12) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

var expect = function (val) {
  if (val === 5) {
    return JSON.stringify({ value: true });
  } else {
    console.log("error");
  }
};

console.log(expect(5));

const email = "test@test.com";

// a string with anything in it is a truthy value
if (email) {
  console.log("you passed in an email");
}

console.log(Boolean(email));

// falsy values in javascript
// - false
// - 0
// - "" or '' an empty string
// - null
// - undefined
// - nan

// truthy values in javascript

// - everthing that is not falsy
// - true
// - '0' => 0 in an empty string
// - 'false'   a string with any value in it
// -  [] => an empty array is also truthy
// -  {} => an empty object is also truthy
// - function() => an empty function is also truthy

const z = "";

if (z) {
  console.log("this is truthy");
} else {
  console.log("this is falsy");
}

// truthy and falsy caveats

const children = 4;
// for 0 if children is not an number
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("please enter number of children");
}

// checking for empty arrays

const posts = [];

if (posts) {
  console.log("Posts");
} else {
  console.log("No posts to list");
}

// checking for empty objects

const user = {
  name: "bhargav",
};

if (Object.keys(user).length > 0) {
  console.log("List user");
} else {
  console.log("no user");
}

// loose equality

console.log(null == 0); // ==>  this returns false
console.log("" == 0); // ==>  this returns false
console.log(false == 0); // ==>  this returns false

// === will check type and value
// it'll check strict
console.log(null === 0); // ==>  this returns truthy
console.log("" === 0); // ==>  this returns truthy
console.log(false === 0); // ==>  this returns truthy

// logical and / or operator

console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && - will return first falsy value or the last value
let a;

a = 10 && 20 && 30;
// if it have a false value it'll return that value i.e: 0
a = 10 && 0 && 30;

// we have 3 values here if none of them are false it'll return the true value
console.log("a1123", a);

// check the array length greater than zero or not and do something

const posts1 = [];

posts1.length > 0 && console.log("posts", posts1[0]);

// OR operator

// it'll return the first truthy value or the last value

let b;

b = 10 || 20;

b = 0 || 20;

b = 0 || null || "123" || undefined;

console.log("b", b);

// Nullish Opearator => ??

// ?? - returns the right side operand when the left side is null or undefined.

let c;

c = 10 ?? 20;

c = undefined ?? 30;

c = 0 ?? 30;

// c = '' ?? 30;

console.log("c", c);

// || => assigns the right side value only if the left value is a falsy value.

let e = false;

// ! not means if it's false then only return this.
if (!e) {
  e = 10;
}

// both the above and below code are same.
e = 20 || 10;

console.log("e", e);

// && => assigns the right side value only if the left value is a truthy value.

let f = 10;

if (f) {
  f = 20;
}

f = f && 20;

f &&= 20;

console.log("f", f);

// ?? => assigns the right side value only if the left value is null or undefined.

let g = null;

if (g === null || g === undefined) {
  g = 20;
}

// if the left side value is null || undfined it'll return the right side.

g = g ?? 10;

console.log("g", g);

// ternary operator

const age = 19;

// using an if statement

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cant vote");
}

// using an ternary operator

let res = age >= 18 ? "You can vote" : "You can't vote";

console.log("age ternary result", res);
