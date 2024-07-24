const library = [
  {
    mask: "title",
    author: "author",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    masktitle: "title1",
    author: "author1",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    mask: "title2",
    author: "author2",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    mask: "title3",
    author: "author3",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// set the reading value to true

let { masktitle } = library[0];

masktitle = "first book";
// reading = true;

console.log("title", masktitle);
// console.log("reading", reading);
// console.log("library", library);

let challenge1 = library[0].title;

challenge1 = "First Name";

console.log("challenge1", challenge1);

library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;

console.log("library", library);
