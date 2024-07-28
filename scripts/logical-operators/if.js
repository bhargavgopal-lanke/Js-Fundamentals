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
