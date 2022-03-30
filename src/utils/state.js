const state = {
  jobs: [],
  page: 1,
  config: {},
  categories: [],
  seniorities: [],
  selectedFilters: {
    categories: [], // filters.categories.push(idCategory)
    seniority: null, // filters.seniorty = idSeniority
  },
};

// const filters = {
//   categories: [], // filters.categories.push(idCategory)
//   seniority: null // filters.seniorty = idSeniority
// }
export { state };
