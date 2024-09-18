console.log("Fqqifqhfiqhfq;")


async function fetchCategories(){
    // async returns a promise 
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json();
    return data;
}

async function populateCategories(){
    const categories = await fetchCategories();
    const categoryList = document.getElementById('categoryList')
    categories.forEach(category => {
        const categoryHolder = document.createElement('div')
        const categoryLink = document.createElement('a')
        categoryLink.href='#'
        categoryHolder.classList.add('category-item' ,'d-flex' ,'justify-content-center' ,'align-items-center')
        categoryLink.textContent=category;
        categoryHolder.appendChild(categoryLink)
        categoryList.appendChild(categoryHolder)
    });

}

populateCategories()