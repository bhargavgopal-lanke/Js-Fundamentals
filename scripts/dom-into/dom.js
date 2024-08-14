const h1 = document.querySelector("h1");
h1.textContent = "Some new title 2";
h1.style.color = "#ffff";
h1.style.backgroundColor = "#000000";

const li = document.querySelector("li:last-of-type");

li.textContent += " (updated dynamically something!)";

const listItems = document.getElementsByTagName("li");
console.log("listItems1", listItems);
for (const list of listItems) {
  console.log("listItems", list);
}
