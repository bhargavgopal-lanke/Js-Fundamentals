const d = new Date();

const month = d.getMonth();

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
