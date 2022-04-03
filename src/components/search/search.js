import { render } from '../../views/offers/offers.js';
import { fetchData } from '../../utils/fetch-data.js';
import { state } from '../../utils/state.js';

const searchInputElement = document.querySelector('.search-input');

searchInputElement.addEventListener('keyup', function () {
  fetchByQuery();
});

export function fetchByQuery() {
  const searchInput = document.querySelector('.search-input').value;
  fetchData(
    `http://localhost:4000/offers?limit=100?search=${searchInput}`
  ).then((data) => {
    let jobs = data.data.records;

    state.jobs = jobs;

    console.log(...jobs);
    render();
  });
}

// components moga importowac utils
// views moga importowac components i utils
// utils moga importowac tylko utils
