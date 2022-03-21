const btnGoToOffers = document.querySelector('.btn-go-to-offers');
const btnGoToAddOffer = document.querySelector('.btn-add-new-offer');

const sectionJobOffers = document.querySelector('.section-job-offers');
const sectionAddOffer = document.querySelector('.section-add-job');
const section = document.querySelectorAll('.section');
const navLogo = document.querySelector('.nav-logo');

const goToAddOffer = function () {
  if (sectionJobOffers.classList.contains('active')) {
    sectionJobOffers.classList.remove('active');
  }
  sectionAddOffer.classList.add('active');
};

const goToOffers = function () {
  if (sectionAddOffer.classList.contains('active')) {
    sectionAddOffer.classList.remove('active');
  }
  sectionJobOffers.classList.add('active');
};

btnGoToOffers.addEventListener('click', goToOffers);
btnGoToAddOffer.addEventListener('click', goToAddOffer);

navLogo.addEventListener('click', () => {
  document.location.href = '/';
});
