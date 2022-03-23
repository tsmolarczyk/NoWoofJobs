import { state } from '../../utils/state.js';
import { getJobs } from './offers.js';

const categories = document.querySelector('.categories');
const filtersBtn = document.querySelector('.filters-btn');

filtersBtn.addEventListener('click', function () {
  categories.classList.toggle('active');
});

// if (window.innerWidth > 932) {
//   console.log(innerWidth);
// }

function renderCategories() {
  const categoryList = document.createElement('div');
  categoryList.classList.add('category-list');
  categories.appendChild(categoryList);

  state.categories.forEach((category) => {
    //empty box
    const categoryElement = document.createElement('button');

    //taking value
    categoryElement.textContent = category.name;

    //adding classes
    categoryElement.classList.add('category-element');
    categoryElement.addEventListener('click', function () {
      filterCategory(category.id);
    });

    //adding elements to DOM
    categoryList.appendChild(categoryElement);
  });
}

function filterCategory(id) {
  getJobs(id);
}
// fetchCategories();

export { renderCategories };
