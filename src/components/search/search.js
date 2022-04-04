import { getJobs, render } from '../../views/offers/offers.js';
import { fetchData } from '../../utils/fetch-data.js';
import { state } from '../../utils/state.js';

const searchInputElement = document.querySelector('.search-input');

searchInputElement.addEventListener('keyup', function () {
  fetchByQuery();
});

export function fetchByQuery() {
  if (searchInputElement.textContent !== null) {
    console.log(searchInputElement.value);
    state.querySearch = searchInputElement.value;
  }
  getJobs();
}

// components moga importowac utils
// views moga importowac components i utils
// utils moga importowac tylko utils
