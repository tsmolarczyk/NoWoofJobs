// import { state } from '../../utils/state.js';

// const jobadd = {
//   title: 'Software Engineer Intern (Java)',
//   duration: 1,
//   description:
//     'What might you encounter on one of our projectAdobe Experience Manager based platforms written in Java Complex and distributed architectures based on open-source solutions and lightweight technologies like RxJava, Vert.x and Consul',
//   thumb: 'yes',
//   company_name: 'Wunderman Thompson Technology',
//   company_city: 'Bydgoszcz',
//   seniority_id: 1,
//   category_ids: ['3', '5', '7'],
//   benefit_ids: ['1', '2', '4', '6'],
//   contracts: [
//     {
//       salary_from: '6600',
//       salary_to: '10200',
//       contract_type_id: '2',
//     },
//   ],
// };

// function postNewJob(newJob) {
//   fetch('http://localhost:4000/offers/', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newJob),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       state.jobs.push(data);
//       console.log(state.jobs);
//     });
// }

// postNewJob(jobadd);

// export { postNewJob, jobadd };
