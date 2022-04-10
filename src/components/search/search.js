import { getJobs } from '../../views/offers/offers.js';
import { state } from '../../utils/state.js';

const searchInputElement = document.querySelector('.search-input');

searchInputElement.setAttribute('placeholder', 'dwa');

function fetchByQuery() {
  if (searchInputElement.textContent !== null) {
    state.querySearch = searchInputElement.value;
  }
  getJobs();
}

searchInputElement.addEventListener('keyup', () => {
  fetchByQuery();
});

export default fetchByQuery;

// components moga importowac utils
// views moga importowac components i utils
// utils moga importowac tylko utils
