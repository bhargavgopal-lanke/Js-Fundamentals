let x = new Date();

let d = x.toString();

d = x.getTime();

// valueOf timestamp of date in milli seconds

d = x.valueOf();

// getFullYear gives the full year
d = x.getFullYear();

// getMonth() gives the current month
d = x.getMonth() + 1;

// getDate() gives the current date
d = x.getDate();

// getHours() gives the current hours
d = x.getHours();

// getMinutes() gives the current minutes
d = x.getMinutes();

// getSeconds() gives the current seconds
d = x.getSeconds();

// getMilliseconds() gives the current milli seconds
d = x.getMilliseconds();

//  getting the todays date
d = `${x.getFullYear()}-${x.getMonth() + 1}-${x.getDate()}`;

console.log("x", x);
console.log("x1", new Date());
// current date in US format
// in US date format month comes first
d = Intl.DateTimeFormat("en-US").format(x); // 7/19/2024

// In GB format I'll get the date first
// this is Indian date format
d = Intl.DateTimeFormat("en-GB").format(x);

// using default get the full Month

d = Intl.DateTimeFormat("default", { month: "long" }).format(x);


console.log(d);
