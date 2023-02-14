const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
const list = document.querySelector(".gallery");

const itemMarkup = images.map((image) =>
  `<li><img class="photo" src="${image.url}" alt="${image.alt}" width="400px"></li>`)
  .join("");
  
list.insertAdjacentHTML("beforeend", itemMarkup);

// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
list.style.listStyleType = "none";
list.style.display = "flex"; 
list.style.flexDirection = "column";
list.style.padding = "40px"; 
list.style.gap = "20px"; 
list.style.justifyContent = "center";
list.style.alignItems = "center";
