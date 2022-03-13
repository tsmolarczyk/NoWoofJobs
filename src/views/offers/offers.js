//'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'

// const jobOffers = document.querySelector('.job-offers');

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
  console.log('test');
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

  // params.set('category', 1);
  params.set('limit', 100);

  fetchData('http://localhost:4000/offers?' + params.toString()).then(
    (data) => {
      let jobs = data.data.records;

      state.jobs = jobs;

      console.log(...jobs);
      return;

      render();
    }
  );
}
function render() {
  const jobList = document.createElement('div');
  jobList.classList.add('job-list');
  sectionJobOffers.appendChild(jobList);

  state.jobs.forEach((job) => {
    const jobElement = document.createElement('div');
    const title = document.createElement('p');
    const company = document.createElement('p');
    const city = document.createElement('p');
    const description = document.createElement('p');
    const deleteBtn = document.createElement('button');

    title.textContent = job.title;
    company.textContent = job.company_name;
    city.textContent = job.company_city;
    description.textContent = job.description;
    deleteBtn.innerHTML = 'delete offer';

    jobElement.classList.add('job-element');
    title.classList.add('title');
    company.classList.add('company-name');
    city.classList.add('job-element-city');
    description.classList.add('job-element-description');
    deleteBtn.classList.add('btn-delete');

    jobList.appendChild(jobElement);
    jobElement.appendChild(title);
    jobElement.appendChild(company);
    jobElement.appendChild(city);
    jobElement.appendChild(description);
    jobElement.appendChild(deleteBtn);
  });
}

getJobs();
// deleteJob(30);
// postNewJob();
