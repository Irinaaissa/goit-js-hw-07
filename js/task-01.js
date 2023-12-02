
const categories = document.querySelector('#categories');
const items = categories.children;

console.log(`Number of categories: ${items.length}`);

for (let item of items) {
  const title = item.firstElementChild.textContent;
  const itemCount = item.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Number of items: ${itemCount}`);
}