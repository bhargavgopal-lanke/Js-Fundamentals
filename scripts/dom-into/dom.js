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
  // toggle using if else condition using className
  // if (section.className === "red-bg visbile") {
  //   section.className = "red-bg invisbile";
  // } else {
  //   section.className = "red-bg visbile";
  // }
  // hide and show using toggle method and classList
  // simple way to hide and show something in js
  section.classList.toggle("invisbile");
  // to add a class using classList i dont have to worry about the whole string
  // classList is an classes object.
  if (section.classList.contains("new-class")) {
    section.classList.remove("new-class");
  } else {
    section.classList.add("new-class");
  }
});

// list dom traversing

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerHTML += '<li class="list-item">New Item 4</li>';
ul.appendChild(newLi);


