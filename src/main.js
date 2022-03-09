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
  const sectionJobOffers = document.querySelector('.selector-job-offers');
  // const -
  //     dodam klasy
  // append
  // dodac valuecheckboxa to id -> state,
}
getConfig();
