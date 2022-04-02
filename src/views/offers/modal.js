import { state } from '../../utils/state.js';

const offerModal = document.querySelector('.offer-modal');
const offersSection = document.querySelector('.section-job-offer');

export function openModal() {
  state.modalOpen = true;
  renderModal();
}

export function closeModal() {
  state.modalOpen = false;
  renderModal();
}

export function renderModal() {
  if (state.modalOpen === false) {
    offerModal.classList.remove('active-modal');
    offersSection.classList.remove('inactive-modal');
    return;
  }
  const offerModalTitle = document.createElement('h2');
  const offerModalSeniority = document.createElement('p');
  const offerModalCategory = document.createElement('div');
  const offerModalDescription = document.createElement('p');

  offerModalTitle.value = state.jobs.title;

  offerModal.appendChild(offerModalTitle);
}
