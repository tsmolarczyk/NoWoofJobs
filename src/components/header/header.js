import { rednerAddOfferForm } from '../../views/new-offer/new-offer.js';

const btnGoToOffers = document.querySelector('.btn-go-to-offers');
const btnGoToAddOffer = document.querySelector('.btn-add-new-offer');

const sectionJobOffers = document.querySelector('.section-job-offers');
const sectionAddOffer = document.querySelector('.section-add-job');
const navLogo = document.querySelector('.nav-logo');

const goToOffers = () => {
  if (sectionJobOffers.classList.contains('hide-offer-add')) {
    sectionJobOffers.classList.remove('hide-offer-add');
  }
  sectionAddOffer.classList.add('hide-offer-list');
};

const goToAddOffer = () => {
  if (sectionAddOffer.classList.contains('hide-offer-list')) {
    sectionAddOffer.classList.remove('hide-offer-list');
  }
  sectionJobOffers.classList.add('hide-offer-add');
};
rednerAddOfferForm();

btnGoToOffers.addEventListener('click', goToOffers);
btnGoToAddOffer.addEventListener('click', goToAddOffer);

navLogo.addEventListener('click', () => {
  document.location.href = '/';
});

export {
  btnGoToOffers,
  btnGoToAddOffer,
  sectionJobOffers,
  sectionAddOffer,
  navLogo,
  goToAddOffer,
  goToOffers,
};
