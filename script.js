  //'http://localhost:4000/offers?page=2&limit=10&orderBy=id&direction=desc'
console.log('lets go');

let state = {
    jobs: [],
    page: 1,
}


function getJobs() {
  fetch('http://localhost:4000/offers').then(
      (res) => res.json())
      .then((data) => {
              let jobs = data.results;
              state.jobs = jobs;
              console.log(data);
        });
    }


getJobs();


render(){
    state.jobs.forEach((job) => {

        //empty box
        const jobElement = document.createElement("div");
        const companyName = document.createElement("h1");        

        //taking value
        

        //adding classes

        //adding elements to DOM


    })
}