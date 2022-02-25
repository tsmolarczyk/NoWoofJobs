function fetchData(link) {
  fetch(link).then(
      (res) => res.json())
}