const companies1 = [
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

const array = [1, 2, 3, 4, 5, 6];

// concat the number using map method

const concatMap = array.map((x) => "Number " + x);

console.log("concatMap", concatMap);

// double the numbers using foreach method
// below is an acumulator pattern
const doubleItem = [];
array.forEach((x) => {
  doubleItem.push(x * 2);
});

console.log("doubleItem", doubleItem);

// filter out the company items from the company array

const companyMap = companies1.map((x) => x.name);

console.log("companyMap", companyMap);

// create an array with just company and category

const companyandCategory = companies1.map((x) => {
  return {
    name: x.name,
    ctaegory: x.Category,
  };
});

console.log("companyandCategory", companyandCategory);

// create an array of the length of each comany in years

const companyYears = companies1.map((companies) => {
  let years = companies.end - companies.Start;
  return {
    name: companies.name,
    years,
  };
});

console.log("companyYears", companyYears);
