import { state } from '../../utils/state.js';
import { getJobs } from './offers.js';

/*
const companyNameInput = document.getElement...
const submitButton = document.querySelector...
const formElement = document.querySelector('form')

liczba mnoga -> []  (tablica), np. offers, users
liczba pojed. - obiekt, string, number, null, np. surname, amount
                boolean - isActive, wasChecked, willExpire
                        - active, checked

funkcje, czasownik renderCategories, getOffers, setOffer

zadnych i, k, blabla, tmp
*/

const filters = document.querySelector('.filters');
const filtersBtn = document.querySelector('.filters-btn');

filtersBtn.addEventListener('click', () => {
  filters.classList.toggle('active');
});

function filterCategory(id) {
  if (state.selectedFilters.categories.includes(id)) {
    const index = state.selectedFilters.categories.indexOf(id);
    if (index > -1) {
      state.selectedFilters.categories.splice(index, 1);
    }
  } else if (!state.selectedFilters.categories.includes(id)) {
    state.selectedFilters.categories.push(id);
  }
  getJobs();
}

function renderCategories() {
  const filterLanguage = document.querySelector('.filter-language');
  const categoryListContainer = document.createElement('div');
  categoryListContainer.classList.add('category-list');
  filterLanguage.appendChild(categoryListContainer);

  state.categories.forEach((category) => {
    const categoryElement = document.createElement('button');

    categoryElement.textContent = category.name;

    categoryElement.classList.add('category-element');

    categoryElement.addEventListener('click', () => {
      categoryElement.classList.toggle('set-filter-btn');

      filterCategory(category.id);
    });
    categoryListContainer.appendChild(categoryElement);
  });
  filterLanguage.addEventListener('click', () => {
    categoryListContainer.classList.toggle('active-category-list');
  });
}

// function renderContractType() {
//   const filterContract = document.querySelector('.filter-contract');
//   const contractTypeList = document.createElement('div');
//   contractTypeList.classList.add('contract-type-list');

//   state.contracts.forEach((contract) => {
//     console.log('contracts here');
//   });
// }

function filterSeniority(id) {
  if (state.selectedFilters.seniority !== null) {
    state.selectedFilters.seniority = null;
  } else {
    state.selectedFilters.seniority = id;
  }

  getJobs();
}

function renderSeniority() {
  const filterExperience = document.querySelector('.filter-experience');
  const seniorityList = document.createElement('div');
  seniorityList.classList.add('seniority-list');
  filterExperience.appendChild(seniorityList);
  const seniorityForm = document.createElement('form');

  state.seniorities.forEach((seniority) => {
    const seniorityElement = document.createElement('input');
    const seniorityElementLabel = document.createElement('label');

    seniorityElement.setAttribute('type', 'radio');
    seniorityElement.setAttribute('name', 'seniority');
    seniorityElementLabel.innerText = `${seniority.name} \xa0`;
    seniorityElement.classList.add('seniority-btn');

    seniorityElement.addEventListener('click', () => {
      seniorityElement.classList.toggle('set-filter-btn');
      filterSeniority(seniority.id);
      // checked = false;
    });

    // seniorityList.appendChild(seniorityElement);
    seniorityList.appendChild(seniorityForm);
    seniorityForm.append(seniorityElement);
    seniorityForm.append(seniorityElementLabel);
  });
}

export { renderCategories, renderSeniority };
