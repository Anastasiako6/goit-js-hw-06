const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

// 
const listArray= [];

ingredients.forEach ((ingredient) => {
  // Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

  const listItem = document.createElement("li");

  // Додасть назву інгредієнта як його текстовий вміст.

  listItem.textContent = ingredient;

  // Додасть елементу клас item.

  listItem.classList.add("item");

  // Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
  
  listArray.push(listItem);
})

list.append(...listArray);