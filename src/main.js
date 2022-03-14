// import './views/offers/offers.js';

function getConfig() {
  fetch('http://localhost:4000/config', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      state.config = data;
      state.categories = data.categories;
      console.log(state.config);
      renderCategories();
      render();
    });
}
goToOffers();
getConfig();
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
https://www.w3schools.com/tags/att_label_for.asp

- components/
  - header
    - header.js
    - header.css
- views
  - offers
    - state.js 
    - offers.js (renderOffers...)
  - new-offer
    - state.js 
    - new-offer.js (renderForm...)
- utils
  - fetch-data.js

- main.js

*/
