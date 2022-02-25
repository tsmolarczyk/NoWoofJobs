const categories = document.querySelector('.categories');

function fetchCategories() {
    getCategories('http://localhost:4000/config');
}
    
function getCategories() {

  fetchData('http://localhost:4000/config')
      .then((data) => {
          console.log(data.data.categories);
        let categories = data.data.categories;
          state.categories = categories;
          
          //renderCategories();
          
        });
    }

    function renderCategories() {
    state.categories.forEach((category) => {

        //empty box
        const categoryElement = document.createElement("div");

        //taking value
        categories.textContent = category.categories;

        //adding classes
        categoryElement.classList.add("category-element");
 

        //adding elements to DOM
        categories.appendChild(categoryElement);
    })
}

fetchCategories();