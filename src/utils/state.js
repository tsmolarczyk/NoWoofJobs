/* eslint-disable import/prefer-default-export */

const state = {
  jobs: [],
  allJobs: [],
  page: 1,
  config: {},
  categories: [],
  contracts: [],
  seniorities: [],
  querySearch: null,
  selectedFilters: {
    categories: [], // filters.categories.push(idCategory)
    contractType: null,
    seniority: null, // filters.seniorty = idSeniority
  },
  modalOpen: false,
};

// const filters = {
//   categories: [], // filters.categories.push(idCategory)
//   seniority: null // filters.seniorty = idSeniority
// }
export { state };
