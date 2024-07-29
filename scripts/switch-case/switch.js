const d = new Date();

const month = d.getMonth();

const hour = d.getHours();

// Find the month of the year
switch (month) {
  case 1:
    console.log("it's January");
    break;
  case 2:
    console.log("month is february");
    break;
  case 3:
    console.log("it's March");
  default:
    console.log("it's not Jan, Feb or March");
}

// Find what day of the day
switch (true) {
  case hour < 12:
    console.log("Good Morning!");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Night");
}
