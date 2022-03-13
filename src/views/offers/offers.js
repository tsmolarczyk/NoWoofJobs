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
function render() {
  const jobList = document.createElement('div');
  jobList.classList.add('job-list');
  sectionJobOffers.appendChild(jobList);

  state.jobs.forEach((job) => {
    const jobElement = document.createElement('div');
    const city = document.createElement('p');
    const description = document.createElement('p');
    const deleteBtn = document.createElement('button');

    city.textContent = job.company_city;
    description.textContent = job.description;
    deleteBtn.innerHTML = 'delete offer';

    jobElement.classList.add('job-element');
    city.classList.add('job-element-city');
    description.classList.add('job-element-description');
    deleteBtn.classList.add('btn-delete');

    jobList.appendChild(jobElement);
    jobElement.appendChild(city);
    jobElement.appendChild(description);
    jobElement.appendChild(deleteBtn);
  });
}

getJobs();
// deleteJob();
// postNewJob();
