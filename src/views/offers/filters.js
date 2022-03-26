import { state } from '../../utils/state.js';
import { getJobs } from './offers.js';

const filters = document.querySelector('.filters');
const filtersBtn = document.querySelector('.filters-btn');

filtersBtn.addEventListener('click', function () {
  filters.classList.toggle('active');
});

function renderCategories() {
  const filterLanguage = document.querySelector('.filter-language');
  const categoryList = document.createElement('div');
  categoryList.classList.add('category-list');
  filterLanguage.appendChild(categoryList);

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

function renderSeniority() {
  const filterExperience = document.querySelector('.filter-experience');
  const seniorityList = document.createElement('div');
  seniorityList.classList.add('seniority-list');
  filterExperience.appendChild(seniorityList);

  state.seniorities.forEach((seniority) => {
    const seniorityElement = document.createElement('button');
    console.log('end of senioritie render');

    seniorityElement.textContent = seniority.name;
    seniorityElement.addEventListener('click', function () {
      filterSeniority(seniority.id);
    });

    seniorityList.appendChild(seniorityElement);
  });
}

function filterCategory(id) {
  getJobs(id);
}
function filterSeniority(id) {
  getJobs(id);
}
// fetchCategories();

export { renderCategories, renderSeniority };
