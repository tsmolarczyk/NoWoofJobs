//'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'

// const jobOffers = document.querySelector('.job-offers');

let newJob = {
  title: 'Remote Frontend Developer',
  duration: 1,
  description:
    'We are a small team focused on code quality and system architecture, working on products - mostly international SaaS solutions. Our clients are well established start-ups with good market fit, willing to take the next step. We help them to scale, by providing good code, nice UX and technical consulting. We split monoliths, get rid of legacy code.',
  thumb: 'yes',
  company_name: 'Accesto',
  company_city: 'Wrocław',
  seniority_id: 2,
  category_ids: ['1', '3', '13'],
  benefit_ids: ['1', '2', '3', '4', '6'],
  contracts: [
    {
      salary_from: '9000',
      salary_to: '16000',
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
// deleteJob(17);
postNewJob();
