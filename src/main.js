function getConfig() {
  fetch('http://localhost:4000/config', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      state.config = data;
      console.log(state.config);
      render();
    });
}

function render() {
  const jobList = document.createElement('div');
  jobList.classList.add('job-list');
  sectionJobOffers.appendChild(jobList);

  state.jobs.forEach((job) => {
    const jobElement = document.createElement('div');
    const city = document.createElement('p');
    const description = document.createElement('p');

    city.textContent = job.company_city;
    description.textContent = job.description;

    jobElement.classList.add('job-element');
    city.classList.add('job-element-city');
    description.classList.add('job-element-description');

    jobList.appendChild(jobElement);
    jobElement.appendChild(city);
    jobElement.appendChild(description);

    //     dodam klasy
    // append
    // dodac valuecheckboxa to id -> state,
  });
}
getConfig();
