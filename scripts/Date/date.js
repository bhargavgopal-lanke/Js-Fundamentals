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

console.log(d);
