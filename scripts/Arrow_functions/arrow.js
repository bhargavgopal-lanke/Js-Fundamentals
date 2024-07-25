const companies = [
  {
    name: "Compnay One",
    Category: "Finance",
    Start: 1981,
    end: 2004,
  },
  {
    name: "Compnay two",
    Category: "Retail",
    Start: 1992,
    end: 2008,
  },
  {
    name: "Compnay 33",
    Category: "Auto",
    Start: 1999,
    end: 2007,
  },
  {
    name: "Compnay 4",
    Category: "Retail",
    Start: 1989,
    end: 2010,
  },
  {
    name: "Compnay 5",
    Category: "Technology",
    Start: 1987,
    end: 2010,
  },
  {
    name: "Compnay 5",
    Category: "Auto",
    Start: 1986,
    end: 1996,
  },
  {
    name: "Compnay 5",
    Category: "Technology",
    Start: 2011,
    end: 2016,
  },
  {
    name: "Compnay 5",
    Category: "Retail",
    Start: 1981,
    end: 1989,
  },
];

// filter out the companies with the name retail

const filterNames = companies.filter(
  (companies) => companies.Category === "Retail"
);

console.log("filterNames", filterNames);

// get companies that started in or after 1980 and ended in or before 2005

const filterCompanies = companies.filter(
  (companies) => companies.Start >= 1980 && companies.end <= 2005
);

console.log("filterCompanies", filterCompanies);

// companies that lasted 10 years or more

const longCompanies = companies.filter(
  (companies) => companies.end - companies.Start >= 10
);

console.log("longCompanies", longCompanies);

// even numbers usng for each

const evenArray = [1, 2, 3, 4, 5, 6, 7, 8];

let evenItems = [];
evenArray.forEach((x) => {
  if (x % 2 == 0) {
    evenItems.push(x);
  }
});

console.log("evenItems", evenItems);
