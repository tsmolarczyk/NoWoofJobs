//'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'

const jobOffers = document.querySelector('.job-offers');

let newJob = {
  title: 'string',
  duration: 3,
  description: 'fajno robota',
  thumb: 'yes',
  company_name: 'string',
  company_city: 'string',
  seniority_id: 'string',
  category_ids: 'array'[(1, 2, 3)],
  benefit_ids: 'array'[(1, 2, 3)],
  contracts: {
    salary_from: '1000',
    salary_to: '2000',
    contract_type_id: 'b2b',
  },
};

function postJob() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:4000/offers', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      value: value,
    })
  );
}

function getJobs() {
  /////////////////////////////////////////////////////

  let url = new URL('http://localhost:4000/');

  let params = new URLSearchParams(url.search);

  console.log(url);

  console.log(params);

  params.set('category', 1);
  params.toString();
  /////////////////////////////////////////////////////

  fetchData('http://localhost:4000/offers').then((data) => {
    let jobs = data.data.records;

    state.jobs = jobs;

    console.log(jobs);
    return;

    // renderJobs();
  });
}

function renderJobs() {
  state.jobs.forEach((job) => {
    //empty box
    const jobElement = document.createElement('div');
    const companyName = document.createElement('h1');
    const jobDescription = document.createElement('p');

    //taking value
    companyName.textContent = job.company_name;
    jobDescription.textContent = job.description;

    //adding classes
    jobElement.classList.add('job-element');
    companyName.classList.add('company-name');
    jobDescription.classList.add('job-desc');

    //adding elements to DOM
    jobOffers.appendChild(jobElement);
    jobElement.appendChild(companyName);
    jobElement.appendChild(jobDescription);
  });
}

getJobs();
