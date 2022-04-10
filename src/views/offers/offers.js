// 'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'

// const jobOffers = document.querySelector('.job-offers');
// requirejs / commonjs

import { fetchData } from '../../utils/fetch-data.js';
import { state } from '../../utils/state.js';
import { sectionJobOffers } from '../../components/header/header.js';
import { openModal } from './modal.js';
// import { postNewJob, jobadd } from '../../views/new-offer/new-offer.js';

// id z formularza potem
// function deleteJob(id) {
//   fetch(`http://localhost:4000/offers/${id}`, {
//     method: 'DELETE',
//   }).then((res) => {
//     console.log('Request complete! response:', res);
//   });
// }
// category?: string
// seniority?: string
// salary_from?: string
// salary_to?: string
// contract_type?: string
// benefits?: string
// page?: string
// limit?: string
// order_by?: string
// sort_direction?: string
// search?: string
// offerId ?: string

export function fetchOfferInfo(id) {
  fetchData(`http://localhost:4000/offers?offerId=${id}`).then((data) => {
    const jobs = data.data.records;

    state.jobs = jobs;
    // console.log(...jobs);
    openModal();
  });
}

function handleOfferClick(id) {
  if (state.modalOpen === true) {
    return;
  }
  fetchOfferInfo(id);
}
function render() {
  if (state.allJobs.length === 0) {
    state.allJobs = state.jobs;
  }

  const searchInputElement = document.querySelector('.search-input');
  console.log(state.allJobs.length);
  searchInputElement.setAttribute(
    'placeholder',
    `Uzywaj tagów i szukaj wśród ${state.allJobs.length} ofert!`
  );

  sectionJobOffers.innerHTML = '';

  const offersOfTheDay = document.createElement('h1');
  offersOfTheDay.textContent = 'OFERTY DNIA';
  offersOfTheDay.classList.add('offers-of-the-day');
  sectionJobOffers.appendChild(offersOfTheDay);

  const jobList = document.createElement('div');
  jobList.classList.add('job-list');
  sectionJobOffers.appendChild(jobList);

  state.jobs.forEach((job) => {
    const jobElement = document.createElement('div');
    const jobElementLogo = document.createElement('img');
    const title = document.createElement('p');
    const company = document.createElement('p');
    const languages = document.createElement('div');
    const jobElementInfo = document.createElement('div');
    const city = document.createElement('p');
    const salaryFrom = document.createElement('span');
    const salaryTo = document.createElement('span');

    jobElementLogo.src = '/assets/images/no-img-logo.png';
    title.textContent = job.title;
    company.textContent = job.company_name;
    languages.textContent = job.categories.map(({ name }) => name).join(', ');

    city.textContent = job.company_city;
    salaryFrom.textContent = job.salary[0].salary_from;
    salaryTo.textContent = job.salary[0].salary_to;

    jobElement.classList.add('job-element');
    title.classList.add('title');
    company.classList.add('company-name');
    languages.classList.add('languages');
    jobElementInfo.classList.add('job-element-info');
    jobElementLogo.classList.add('job-element-logo');
    city.classList.add('job-element-city');
    salaryTo.classList.add('salary-to');
    salaryFrom.classList.add('salary-from');

    jobList.appendChild(jobElement);
    jobElement.appendChild(jobElementLogo);
    jobElementInfo.appendChild(title);
    jobElementInfo.appendChild(company);
    jobElementInfo.appendChild(salaryFrom);
    jobElementInfo.appendChild(salaryTo);
    jobElementInfo.appendChild(languages);
    jobElementInfo.appendChild(city);
    jobElement.appendChild(jobElementInfo);

    jobElement.addEventListener('click', () => handleOfferClick(job.id));
  });
}

function getJobs() {
  const params = new URLSearchParams();

  if (state.querySearch !== null) {
    params.append('search', state.querySearch);
  }

  state.selectedFilters.categories.forEach((id) => {
    params.append('category', id);
  });

  if (state.selectedFilters.contractType !== null) {
    params.set('contract_type', state.selectedFilters.contractType);
  }

  if (state.selectedFilters.seniority !== null) {
    params.set('seniority', state.selectedFilters.seniority);
  }

  params.set('limit', 100);

  console.log(`http://localhost:4000/offers?${params.toString()}`);

  fetchData(`http://localhost:4000/offers?${params.toString()}`).then(
    (data) => {
      const jobs = data.data.records;

      state.jobs = jobs;

      render();
    }
  );
}
getJobs();

// postNewJob();
// deleteJob(1);
// postNewJob();

export { render, getJobs };
