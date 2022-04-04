import { goToOffers } from './components/header/header.js';
import { state } from './utils/state.js';
import { renderCategories, renderSeniority } from './views/offers/filters.js';
import { render } from './views/offers/offers.js';
import { fetchByQuery } from './components/search/search.js';

function getConfig() {
  fetch('http://localhost:4000/config', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      state.config = data;
      state.categories = data.categories;
      state.seniorities = data.seniorities;
      console.log(state.config);
      renderCategories();
      renderSeniority();
      render();
    });
}

goToOffers();

getConfig();
