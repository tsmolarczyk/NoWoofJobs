/* eslint-disable import/prefer-default-export */

function fetchData(link) {
  const data = fetch(link).then((res) => res.json());

  return data;
}

export { fetchData };
