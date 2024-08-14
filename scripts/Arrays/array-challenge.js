// ad 6 and 0 in the begining and end of the array

const challengeArray = [1, 2, 3, 4, 5];

challengeArray.push(6);
challengeArray.unshift(0);

console.log("challenge 1 =>", challengeArray.reverse());

// combine arr1 and arr2 into a new array arr3

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

let arr3;

arr2.splice(0, 1);

arr3 = [...arr1, ...arr2];

console.log("challenge 2 =>", arr3);

// object as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "Bhargav",
};

// console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Gopal",
  })
);

// sum the params passed into the function

function sumUsers(...numbers) {
  let total = 0;

  for (const i of numbers) {
    total += i;
  }
  return total;
}

console.log(sumUsers(1, 2, 3, 4, 5, 6));

// arrays as params

const userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log("randomIndex", randomIndex);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom(userArray);
