const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log("Number of categories: " + items.length);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemList = item.querySelectorAll("li");
  console.log("Category: " + title);
  console.log("Number of items: " + itemList.length);
});