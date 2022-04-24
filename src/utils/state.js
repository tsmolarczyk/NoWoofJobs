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
  cities: [],
  selectedFilters: {
    categories: [], // filters.categories.push(idCategory)
    localization: [],
    contractType: null,
    seniority: null, // filters.seniorty = idSeniority
  },
  addOfferForm: {
    title: null,
    duration: null,
    description: null,
    thumb: null,
    company_name: null,
    company_city: null,
    seniority_id: null,
    category_ids: [],
    benefit_ids: [],
    // contracts: {
    //     salary_from: string
    //     salary_to: string
    //     contract_type_id: string
    // }[]
  },
  modalOpen: false,
  offerDetails: null,
};

// const filters = {
//   categories: [], // filters.categories.push(idCategory)
//   seniority: null // filters.seniorty = idSeniority
// }
export { state };
