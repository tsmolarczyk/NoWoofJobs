import { state } from '../../utils/state.js';
import { getJobs } from './offers.js';

const filtersSection = document.querySelector('.filters-section');
const filtersBtn = document.querySelector('.filters-btn');
const clearBtn = document.querySelector('.clear-btn');

function resetCategories() {
  const allCategoryElement = document.querySelectorAll('.category-element');

  allCategoryElement.forEach((category) => {
    if (category.classList.contains('selected-category-element-btn')) {
      category.classList.remove('selected-category-element-btn');
    }
  });
  document.querySelector('.categories-list').classList.remove('active-list');
}

function resetLocalizations() {
  const allLocalizationElement = document.querySelectorAll(
    '.localization-element',
  );

  allLocalizationElement.forEach((localization) => {
    if (localization.classList.contains('selected-localization-element-btn')) {
      localization.classList.remove('selected-localization-element-btn');
    }
  });
  document.querySelector('.localizations-list').classList.remove('active-list');
}

function resetContractType() {
  const allInputsContractType = document.querySelectorAll(
    '.contract-type-input',
  );

  allInputsContractType.forEach((input) => {
    input.checked = false;
  });

  document.querySelector('.contract-type-list').classList.remove('active-list');
}

function resetSeniority() {
  const allInputsSeniority = document.querySelectorAll('.seniority-input');

  allInputsSeniority.forEach((input) => {
    input.checked = false;
  });

  document.querySelector('.seniority-list').classList.remove('active-list');
}

filtersBtn.addEventListener('click', () => {
  filtersSection.classList.toggle('active-filters');
});
clearBtn.addEventListener('click', () => {
  state.selectedFilters.categories = [];
  state.selectedFilters.contractType = null;
  state.selectedFilters.seniority = null;
  // document.querySelector('.categories-list)'.classList.remove('active-list'));

  resetCategories();
  resetLocalizations();
  resetContractType();
  resetSeniority();
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
    '.filter-by-language-container',
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

function filterLocalization(cityName) {
  if (state.selectedFilters.localization.includes(cityName)) {
    const index = state.selectedFilters.localization.indexOf(cityName);
    if (index > -1) {
      state.selectedFilters.localization.splice(index, 1);
    }
  } else if (!state.selectedFilters.localization.includes(cityName)) {
    state.selectedFilters.localization.push(cityName);
  }
  getJobs();
}

function renderLocalization() {
  const filterByLocalizationBtn = document.querySelector(
    '.filter-by-localization-btn',
  );
  const filterByLocalizationContainer = document.querySelector(
    '.filter-by-localization-container',
  );
  const localizationsList = document.createElement('div');
  localizationsList.classList.add('localizations-list');
  filterByLocalizationContainer.appendChild(localizationsList);

  state.jobs.forEach((job) => {
    if (!state.cities.includes(job.company_city)) {
      state.cities.push(job.company_city);
    }
  });
  state.cities.forEach((cityName) => {
    const localizationElement = document.createElement('button');
    localizationElement.textContent = cityName;
    localizationElement.classList.add('localization-element');

    localizationElement.addEventListener('click', () => {
      localizationElement.classList.toggle('selected-localization-element-btn');

      filterLocalization(cityName);

      // filterCategories(category.id);
    });
    localizationsList.appendChild(localizationElement);
  });

  filterByLocalizationBtn.addEventListener('click', () => {
    localizationsList.classList.toggle('active-list');
  });
}
function filterContractType(id) {
  state.selectedFilters.contractType = null;
  state.selectedFilters.contractType = id;

  getJobs();
}

function renderContractType() {
  const filterByContractTypeBtn = document.querySelector(
    '.filter-by-contract-type-btn',
  );
  const filterByContractTypeContainer = document.querySelector(
    '.filter-by-contract-type-container',
  );
  const contractTypeList = document.createElement('div');
  contractTypeList.classList.add('contract-type-list');
  filterByContractTypeContainer.appendChild(contractTypeList);
  const contractForm = document.createElement('form');

  state.contracts.forEach((contract) => {
    const contractElement = document.createElement('input');
    const contractElementLabel = document.createElement('label');
    const noBreak = document.createElement('nobr');

    contractElement.setAttribute('type', 'radio');
    contractElement.setAttribute('name', 'contract');
    contractElement.classList.add('contract-type-input');

    contractElementLabel.innerText = `${contract.name} \xa0`;
    contractTypeList.appendChild(contractForm);
    noBreak.append(contractElement);
    noBreak.append(contractElementLabel);
    contractTypeList.append(noBreak);

    contractElement.addEventListener('click', () => {
      filterContractType(contract.id);
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
    '.filter-by-seniority-btn',
  );
  const filterBySeniorityContainer = document.querySelector(
    '.filter-by-seniority-container',
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
    seniorityElement.classList.add('seniority-input');

    seniorityElement.addEventListener('click', () => {
      filterSeniority(seniority.id);
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

export {
  renderCategories,
  renderLocalization,
  renderContractType,
  renderSeniority,
};
