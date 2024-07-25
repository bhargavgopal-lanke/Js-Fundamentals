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
