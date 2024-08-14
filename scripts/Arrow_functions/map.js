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

const companyMap = companies.map((x) => x.name);

console.log("companyMap", companyMap);

// create an array with just company and category

const companyandCategory = companies.map((x) => {
  return {
    name: x.name,
    ctaegory: x.Category,
  };
});

console.log("companyandCategory", companyandCategory);

// create an array of the length of each comany in years

const companyYears = companies.map((companies) => {
  let years = companies.end - companies.Start;
  return {
    name: companies.name,
    years,
  };
});

console.log("companyYears", companyYears);

// chain map methods

const squareAndDouble = array
  .map((x) => Math.sqrt(x))
  .map((x) => Math.floor(x * 2));

console.log("squareAndDouble", squareAndDouble);
