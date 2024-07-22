// increment the document title on click of the add and remove buttons

let messages1 = 1;

function add() {
  messages1++;
  if (messages1 > "0") {
    document.title = `${messages1} new messages`;
  }
}

function remove() {
  if (messages1 > "0") {
    messages1--;
    document.title = `${messages1} new messages`;
  }
  if (messages1 == "0") {
    document.title = "App";
  }
}
