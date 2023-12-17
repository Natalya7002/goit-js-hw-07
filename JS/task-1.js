// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
const commonList = document.querySelector("#categories");
const listItems = commonList.querySelectorAll("li.item");

console.log("Number of categories: " + listItems.length);

listItems.forEach(function (listItem) {
  const listTitle = listItem.querySelector("h2").textContent;

  const listElements = listItem.querySelectorAll("ul > li");

  console.log("Category: " + listTitle);
  console.log("Elements: " + listElements.length);
});
