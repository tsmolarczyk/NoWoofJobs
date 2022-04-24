import { state } from '../../utils/state.js';
import { fetchData } from '../../utils/fetch-data.js';

const offersSection = document.querySelector('.section-job-offers');
const offerModal = document.querySelector('.offer-modal');

function renderModal() {
  offerModal.innerHTML = '';

  if (state.modalOpen === false) {
    offerModal.classList.remove('active-modal');
    offersSection.classList.remove('section-job-offer-hide');
    return;
  }
  if (state.modalOpen === true) {
    offersSection.classList.add('section-job-offer-hide');
  }

  offerModal.classList.add('active-modal');
  const offerModalInfoContainer = document.createElement('div');
  const modalCloseBtn = document.createElement('button');
  const offerModalTitle = document.createElement('h2');
  const offerModalDescription = document.createElement('p');

  offerModalTitle.textContent = state.offerDetails.title;
  offerModalDescription.textContent = state.offerDetails.description;
  offerModalInfoContainer.classList.add('offer-modal-info-container');
  modalCloseBtn.classList.add('close-btn');

  offerModalInfoContainer.appendChild(offerModalTitle);
  offerModalInfoContainer.appendChild(offerModalDescription);
  offerModal.appendChild(offerModalInfoContainer);
  offerModal.appendChild(modalCloseBtn);

  modalCloseBtn.addEventListener('click', () => {
    state.modalOpen = false;
    renderModal();
  });
}

function openModal() {
  state.modalOpen = true;
  renderModal();
}

function handleOfferClick(id) {
  if (state.modalOpen === true) {
    return;
  }

  // promise chaining
  fetchData(`http://192.168.1.5:4000/offers?offerId=${id}`).then((data) => {
    const [offerDetail] = data.data.records;

    state.offerDetails = offerDetail;
    openModal();
  });
}

export { openModal, renderModal, handleOfferClick };
