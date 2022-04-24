import { goToOffers } from './components/header/header.js';
import { state } from './utils/state.js';
import {
  renderCategories,
  renderLocalization,
  renderContractType,
  renderSeniority,
} from './views/offers/filters.js';
import { render } from './views/offers/offers.js';
import './components/search/search.js';

function getConfig() {
  fetch('http://192.168.1.5:4000/config', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      state.config = data;
      state.categories = data.categories;
      state.contracts = data.contract_types;
      state.seniorities = data.seniorities;
      renderCategories();
      renderContractType();
      renderLocalization();
      renderSeniority();
      render();
    });
}

goToOffers();

getConfig();
