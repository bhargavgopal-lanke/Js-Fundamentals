const library = [
  {
    masktitle: "title to first road",
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
// set the masktitle destructure variable name to firstBook
let { masktitle: firstBook } = library[0];
// reading = true;

console.log("title", firstBook);
// console.log("reading", reading);
// console.log("library", library);


library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;

console.log("library", library);
