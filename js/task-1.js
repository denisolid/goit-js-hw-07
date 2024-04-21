const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const listItems = item.querySelectorAll('li');
  console.log(`Elements: ${listItems.length}`);
}
)


