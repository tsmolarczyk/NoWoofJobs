import { state } from '../../utils/state.js';
import { getJobs } from './offers.js';

const filtersContainer = document.querySelector('.filters-container');
const filtersBtn = document.querySelector('.filters-btn');
const clearBtn = document.querySelector('.clear-btn');

filtersBtn.addEventListener('click', () => {
  filtersContainer.classList.toggle('active');
});
clearBtn.addEventListener('click', () => {
  state.selectedFilters.categories = [];
  state.selectedFilters.contractType = null;
  state.selectedFilters.seniority = null;
  location.reload();
  getJobs();
});

function filterCategories(id) {
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
  const filterByLanguageContainer = document.querySelector(
    '.filter-by-language-container'
  );
  const filterByLanguageBtn = document.querySelector('.filter-by-language-btn');
  const categoriesList = document.createElement('div');
  categoriesList.classList.add('categories-list');
  filterByLanguageContainer.appendChild(categoriesList);

  state.categories.forEach((category) => {
    const categoryElement = document.createElement('button');

    categoryElement.textContent = category.name;

    categoryElement.classList.add('category-element');

    categoryElement.addEventListener('click', () => {
      categoryElement.classList.toggle('selected-category-element-btn');

      filterCategories(category.id);
    });
    categoriesList.appendChild(categoryElement);
  });
  filterByLanguageBtn.addEventListener('click', () => {
    categoriesList.classList.toggle('active-list');
  });
}

function filterContractType(id) {
  state.selectedFilters.contractType = null;
  state.selectedFilters.contractType = id;

  getJobs();
}

function renderContractType() {
  const filterByContractTypeBtn = document.querySelector(
    '.filter-by-contract-type-btn'
  );
  const filterByContractTypeContainer = document.querySelector(
    '.filter-by-contract-type-container'
  );
  const contractTypeList = document.createElement('div');
  contractTypeList.classList.add('contract-type-list');
  filterByContractTypeContainer.appendChild(contractTypeList);
  const contractForm = document.createElement('form');

  state.contracts.forEach((contract) => {
    const contractElement = document.createElement('input');
    const contractElementLabel = document.createElement('label');

    contractElement.setAttribute('type', 'radio');
    contractElement.setAttribute('name', 'contract');

    contractElementLabel.innerText = `${contract.name} \xa0`;
    contractTypeList.appendChild(contractForm);
    contractForm.append(contractElement);
    contractForm.append(contractElementLabel);

    contractElement.addEventListener('click', () => {
      filterContractType(contract.id);
      // checked = false;
    });

    filterByContractTypeBtn.addEventListener('click', () => {
      contractTypeList.classList.toggle('active-list');
    });
  });
}

function filterSeniority(id) {
  // if (state.selectedFilters.seniority !== null) {
  //   state.selectedFilters.seniority = null;
  // } else {
  state.selectedFilters.seniority = null;
  state.selectedFilters.seniority = id;

  getJobs();
}

function renderSeniority() {
  const filterBySeniorityBtn = document.querySelector(
    '.filter-by-seniority-btn'
  );
  const filterBySeniorityContainer = document.querySelector(
    '.filter-by-seniority-container'
  );
  const seniorityList = document.createElement('div');
  seniorityList.classList.add('seniority-list');
  filterBySeniorityContainer.appendChild(seniorityList);
  const seniorityForm = document.createElement('form');

  state.seniorities.forEach((seniority) => {
    const seniorityElement = document.createElement('input');
    const seniorityElementLabel = document.createElement('label');

    seniorityElement.setAttribute('type', 'radio');
    seniorityElement.setAttribute('name', 'seniority');
    seniorityElementLabel.innerText = `${seniority.name} \xa0`;
    seniorityElement.classList.add('seniority-btn');

    seniorityElement.addEventListener('click', () => {
      filterSeniority(seniority.id);

      // checked = false;
    });
    filterBySeniorityBtn.addEventListener('click', () => {
      seniorityList.classList.toggle('active-list');
    });

    // seniorityList.appendChild(seniorityElement);
    seniorityList.appendChild(seniorityForm);
    seniorityForm.append(seniorityElement);
    seniorityForm.append(seniorityElementLabel);
  });
}

export { renderCategories, renderContractType, renderSeniority };
