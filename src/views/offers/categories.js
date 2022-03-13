const categories = document.querySelector('.categories');

function fetchCategories() {
  getCategories('http://localhost:4000/config');
}

function getCategories() {
  fetchData('http://localhost:4000/config').then((data) => {
    let categories = data.data.categories;
    state.categories = categories;

    console.log(...categories);

    renderCategories();
  });
}

function renderCategories() {
  const categoryList = document.createElement('div');
  categoryList.classList.add('category-list');
  categories.appendChild(categoryList);

  state.categories.forEach((category) => {
    //empty box
    const categoryElement = document.createElement('button');

    //taking value
    categoryElement.textContent = category.name;

    //adding classes
    categoryElement.classList.add('category-element');

    //adding elements to DOM
    categoryList.appendChild(categoryElement);
  });
}

// fetchCategories();
