const categories = document.querySelector("#categories");

const items = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const titleEl = item.querySelector("h2");
  const title = titleEl ? titleEl.textContent.trim() : "";
  const count = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});
