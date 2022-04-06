import { state } from '../../utils/state.js';

const offerModal = document.querySelector('.offer-modal');
const offersSection = document.querySelector('.section-job-offer');

export function renderModal() {
  offerModal.innerHTML = '';

  if (state.modalOpen === false) {
    offerModal.classList.remove('active-modal');
    offersSection.classList.remove('inactive-modal');
    return;
  }
  const modalCloseBtn = document.createElement('button');
  const offerModalTitle = document.createElement('h2');
  const offerModalDescription = document.createElement('p');

  // zawsze bedzie jedna, ale jak to zrobic poprawnie? jak wyciagnac? ...
  offerModalTitle.textContent = state.jobs[0].title;
  offerModalDescription.textContent = state.jobs[0].description;

  modalCloseBtn.classList.add('close-btn');

  offerModal.appendChild(modalCloseBtn);
  offerModal.appendChild(offerModalTitle);
  offerModal.appendChild(offerModalDescription);

  function closeModal() {
    state.modalOpen = false;
    renderModal();
  }

  modalCloseBtn.addEventListener('click', closeModal);
}

export function openModal() {
  state.modalOpen = true;
  renderModal();
}
