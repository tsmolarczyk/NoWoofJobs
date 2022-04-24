function rednerAddOfferForm() {
  const sectionAddContainer = document.querySelector('.section-add-container');
  const addOfferForm = document.createElement('div');
  const addOfferLabel = document.createElement('label');
  const companyPar = document.createElement('p');
  const companyInput = document.createElement('input');

  companyPar.textContent = 'lol';

  sectionAddContainer.appendChild(addOfferForm);
  addOfferForm.appendChild(addOfferLabel);
  addOfferLabel.appendChild(companyPar);
  addOfferLabel.appendChild(companyInput);
}
// <div class="form-labels">
//             <label>
//             <p>Company:</p>
//             <input class="input" type="text" />
//             </label>
//             <label>
//             <p>Seniority:</p>
//             <input list="seniority" name="seniority" class="input" />
//             </label>
//             <label>
//             <p>Salary</p>
//             <input type="number" class="salary-from input" />
//             <input type="number" class="salary-to input" />
//             </label>
//             <label>
//             <p>Contract Type</p>
//             <input type="text" class="contract-type input" />
//             </label>
//             <label>
//             <p class="benefits">Benefits:</p>
//             </label>
//             <label>
//             <p>Company name</p>
//             <input type="text" class="company-name input" />
//             </label>
//             <label>
//             <p>Company city</p>
//             <input type="text" class="company-name input" />
//             </label>
//             <label>
//             <p>Description</p>
//             <input type="text" class="description input" />
//             </label>
//         </div>
//         <button class="add-new-offer-btn">ADD</button>

// const jobadd = {
//   title: 'Software Engineer Intern (Java)',
//   duration: 1,
//   description:
//     'What might you encounter on one of... ',
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
// const addNewOfferBtn = document.querySelector('.add-new-offer-btn');
// addNewOfferBtn.addEventListener(
//   'click',
//   posNewJob,

//   // postNewJob(
// );

export { rednerAddOfferForm };
// export { postNewJob, jobadd };
