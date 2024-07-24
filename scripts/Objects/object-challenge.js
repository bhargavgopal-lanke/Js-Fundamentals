const library = [
  {
    title: "title",
    author: "author",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "title1",
    author: "author1",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "title2",
    author: "author2",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "title3",
    author: "author3",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// set the reading value to true

// let {
//   title,
//   status: { own, reading, read },
// } = library;

// title = "first book";
// reading = true;

// console.log("title", title);
// console.log("reading", reading);
// console.log("library", library);

let challenge1 = library[0].title;

challenge1 = "First Name";

console.log("challenge1", challenge1);

let challenge2 = library[0].status.reading;

challenge2 = true;

console.log("challenge2", challenge2);
