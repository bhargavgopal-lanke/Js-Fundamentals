const h1 = document.querySelector("h1");
h1.textContent = "Some new title 2";
h1.style.color = "#ffff";
h1.style.backgroundColor = "#000000";

const li = document.querySelector("li:last-of-type");

li.textContent += " (updated dynamically something!)";

const listItems = document.getElementsByTagName("li");
console.log("listItems1", listItems);
for (const listItemEl of listItems) {
  console.dir(listItemEl);
}

const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue";

button.addEventListener("click", () => {
  // className should be as it's it should be the same like how it's in HTML
  if (section.className === "red-bg visbile") {
    section.className = "red-bg invisbile";
  } else {
    section.className = "red-bg visbile";
  }
});
