const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtn = document.querySelectorAll('.category-btn');

function filterProduct() {
    const inputValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    const activeCategory = document.querySelector('.category-btn.active');

    productItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();   
        const category = item.dataset.category.toLowerCase();

        if (activeCategory && activeCategory.dataset.category.toLowerCase() === 'all'){
            item.style.display = 'block';
        } else if (activeCategory && category !== activeCategory.dataset.category.toLowerCase()) {
            item.style.display = 'none';
        } else if (title.includes(inputValue) || category.includes(inputValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }   
    });
}


searchBtn.addEventListener('click', filterProduct);
searchInput.addEventListener('keyup', filterProduct);
categoryBtn.forEach(btn => {
    btn.addEventListener('click', setCategory);
})

function setCategory(event) {
    categoryBtn.forEach(btn => {
        btn.classList.remove('active');
    });

    event.target.classList.add('active');
    filterProduct();
}

filterProduct();