//'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'

// const jobOffers = document.querySelector('.job-offers');

let newJob = {
  title: 'sklep',
  duration: 1,
  description: 'praca 5',
  thumb: 'yes',
  company_name: 'IBM',
  company_city: 'NY',
  seniority_id: 3,
  category_ids: ['1', '2', '3'],
  benefit_ids: ['1', '2', '3'],
  contracts: [
    {
      salary_from: '1000',
      salary_to: '2000',
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

function getJobs() {
  const params = new URLSearchParams();

  params.set('category', 2);
  params.set('limit', 100);

  fetchData('http://localhost:4000/offers?' + params.toString()).then(
    (data) => {
      let jobs = data.data.records;

      state.jobs = jobs;

      console.log(...jobs);
      return;

      // renderJobs();
    }
  );
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
// deleteJob();
// postNewJob();
