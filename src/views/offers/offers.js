//'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'

// const jobOffers = document.querySelector('.job-offers');
// requirejs / commonjs

// import { fetchData } from '../../utils/fetch-data.js';

let newJob = {
  title: 'Frontend Developer',
  duration: 1,
  description:
    'We are currently searching for a motivated, Junior Frontend Developer to work within our growing web applications team. If you enjoy solving problems and you are an effective communicator that thrives in a team environment - we would love to hear from you!',
  thumb: 'yes',
  company_name: 'Ivarion',
  company_city: 'Gdańsk',
  seniority_id: 1,
  category_ids: ['1', '2', '3', '5', '7'],
  benefit_ids: ['1', '2', '4', '6'],
  contracts: [
    {
      salary_from: '6600',
      salary_to: '10200',
      contract_type_id: '1',
    },
  ],
};

function postNewJob() {
  fetch('http://localhost:4000/offers/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJob),
  })
    .then((res) => res.json())
    .then((data) => {
      state.jobs.push(data);
      // console.log('Request complete! response:', res);
    });
}
//id z formularza potem
function deleteJob(id) {
  fetch(`http://localhost:4000/offers/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    console.log('Request complete! response:', res);
  });
}

function getJobs(id) {
  const params = new URLSearchParams();
  if (id !== undefined) {
    params.set('category', id);
  }
  params.set('limit', 100);

  fetchData('http://localhost:4000/offers?' + params.toString()).then(
    (data) => {
      let jobs = data.data.records;

      state.jobs = jobs;

      console.log(...jobs);
      render();
    }
  );
}
function render() {
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
  });
}

getJobs();
// deleteJob(1);
// postNewJob();
