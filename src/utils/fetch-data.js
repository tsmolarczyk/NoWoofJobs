function fetchData(link) {
  const data = fetch(link).then((res) => res.json());

  return data;
}

export { fetchData };

// dodac metode get, post
