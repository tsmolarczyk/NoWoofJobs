import { state } from '../../utils/state.js';
import { getJobs, render } from './offers.js';

const filters = document.querySelector('.filters');
const filterBtnsBtn = document.querySelector('.filter-btns-btn');
const filtersBtn = document.querySelector('.filters-btn');
// const categoryList = document.querySelector('.category-list');

filtersBtn.addEventListener('click', function () {
  filters.classList.toggle('active');
});

function renderCategories() {
  const filterLanguage = document.querySelector('.filter-language');
  const categoryList = document.createElement('div');
  categoryList.classList.add('category-list');
  filterLanguage.appendChild(categoryList);

  state.categories.forEach((category) => {
    const categoryElement = document.createElement('button');

    categoryElement.textContent = category.name;

    categoryElement.classList.add('category-element');

    categoryElement.addEventListener('click', function () {
      console.log(category.id);
      categoryElement.classList.toggle('set-filter-btn');

      filterCategory(category.id);
    });
    categoryList.appendChild(categoryElement);
  });
}

function filterCategory(id) {
  if (state.selectedFilters.categories.includes(id)) {
    let index = state.selectedFilters.categories.indexOf(id);
    if (index > -1) {
      state.selectedFilters.categories.splice(index, 1);
      console.log(state.selectedFilters.categories);
    }
  } else if (!state.selectedFilters.categories.includes(id)) {
    state.selectedFilters.categories.push(id);
  }
  console.log(state.selectedFilters.categories);
  getJobs();
}

function renderSeniority() {
  const filterExperience = document.querySelector('.filter-experience');
  const seniorityList = document.createElement('div');
  seniorityList.classList.add('seniority-list');
  filterExperience.appendChild(seniorityList);

  state.seniorities.forEach((seniority) => {
    const seniorityElement = document.createElement('button');
    seniorityElement.textContent = seniority.name;

    seniorityElement.addEventListener('click', function () {
      seniorityElement.classList.toggle('set-filter-btn');

      filterSeniority(seniority.id);
    });

    seniorityList.appendChild(seniorityElement);
  });
}

function filterSeniority(id) {
  if (state.selectedFilters.seniority !== null) {
    state.selectedFilters.seniority = null;
  } else {
    state.selectedFilters.seniority = id;
  }
  console.log(id);
  console.log(state.selectedFilters.seniority);

  getJobs();
}

filterBtnsBtn.addEventListener('click', function () {
  console.log('should toggle categories');
  console.log(categoryList);
  categoryList.classList.toggle('active-open-categories');
});

export { renderCategories, renderSeniority };
