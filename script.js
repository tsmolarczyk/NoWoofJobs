  //'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'
console.log('lets go');

const jobOffers = document.querySelector(".job-offers");

let state = {
    jobs: [],
    page: 1,
}

function fetchOffers() {
    getJobs('http://localhost:4000/offers');
}


function getJobs(link) {
  fetch(link).then(
      (res) => res.json())
      .then((data) => {
          console.log(data.data.records);
        let jobs = data.data.records;
          state.jobs = jobs;
          console.log(jobs)
          render();
        });
    }

function render() {
    state.jobs.forEach((job) => {

        //empty box
        const jobElement = document.createElement("div");
        const companyName = document.createElement("h1");
        const jobDescription = document.createElement("p");

        //taking value
        companyName.textContent = job.company_name;
        jobDescription.textContent = job.description;

        //adding classes
        jobElement.classList.add("job-element");
        companyName.classList.add("company-name");
        jobDescription.classList.add("job-desc")

        //adding elements to DOM
        jobOffers.appendChild(jobElement);
        jobElement.appendChild(companyName);
        jobElement.appendChild(jobDescription);

    })
}

fetchOffers();