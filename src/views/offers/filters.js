import { state } from '../../utils/state.js';
import { getJobs, render } from './offers.js';

const filters = document.querySelector('.filters');
const filtersBtn = document.querySelector('.filters-btn');

filtersBtn.addEventListener('click', function () {
  filters.classList.toggle('active');
});

function renderCategories() {
  const selectedFiltersCategories = state.selectedFilters.categories;
  const filterLanguage = document.querySelector('.filter-language');
  const categoryList = document.createElement('div');
  categoryList.classList.add('category-list');
  filterLanguage.appendChild(categoryList);

  state.categories.forEach((category) => {
    const categoryElement = document.createElement('button');

    console.log(selectedFiltersCategories);
    console.log(category.id);
    categoryElement.textContent = category.name;

    categoryElement.classList.add('category-element');

    categoryElement.addEventListener('click', function () {
      console.log(selectedFiltersCategories);

      console.log(category.id);
      categoryElement.classList.toggle('set-filter-btn');
      if (selectedFiltersCategories.includes(category.id)) {
        console.log('usuwamy ten id');
        let index = selectedFiltersCategories.indexOf(category.id);
        if (index > -1) {
          selectedFiltersCategories.splice(index, 1);
          console.log(selectedFiltersCategories);
        }
      } else if (!selectedFiltersCategories.includes(category.id)) {
        console.log('dodajemy id do listy filtrow');
        selectedFiltersCategories.push(category.id);
        console.log(selectedFiltersCategories);
      }
    });
    categoryList.appendChild(categoryElement);
    console.log(selectedFiltersCategories);
  });
}

function filterCategory(id) {
  console.log(id);
  getJobs();
  console.log(state.selectedFilters.categories);
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
  state.selectedFilters.seniority = id;

  getJobs();
}

export { renderCategories, renderSeniority };
