const productsList = document.getElementById('productsList');
const searchBar = document.getElementById('searchBar');
let listedProducts = [];
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toUpperCase();
    console.log(searchString);
    const data=listedProducts.products;
    const filtered= data.filter((product) => {
        return (
            product.title.toUpperCase().includes(searchString)
        );
    });
    display(filtered);
});
const load = async () => {
    try {
        const res = await fetch("product_dummy_data.txt");
        listedProducts = await res.json();
        const data=listedProducts.products;
        display(data);
    } catch (err) {
        console.error(err);
    }
};

const display = (data) => {
    const htmlString = data
        .map((product) => {
            return `
            <li class="product">
                <h1>${product.title}</h1>
                <p>${product.description}</p>
                <img src="${product.thumbnail}"></img>
            </li>
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;
};

load();
