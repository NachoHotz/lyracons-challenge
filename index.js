const products = [];

for (let i = 0; i < 8; i++) {
  products.push({
    title: 'Título de producto',
    img: './img/headphones_sony.jpg',
    brand: 'Marca',
    price: '12.345,00',
  });
}

function createProduct(product) {
  const productContainer = document.createElement('article');
  productContainer.className = 'product';

  const productImg = document.createElement('img');
  productImg.id = 'img';
  productImg.src = product.img;
  productImg.alt = 'product';

  const productTitle = document.createElement('p');
  productTitle.id = 'productTitle';
  productTitle.textContent = product.title;

  const productBrand = document.createElement('p');
  productBrand.textContent = product.brand;

  const productPrice = document.createElement('p');
  productPrice.id = 'price';
  productPrice.textContent = `$ ${product.price}`;

  const productBtn = document.createElement('button');
  productBtn.id = 'productBtn';
  productBtn.textContent = 'COMPRAR';

  productContainer.appendChild(productImg);
  productContainer.appendChild(productTitle);
  productContainer.appendChild(productBrand);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(productBtn);

  return productContainer;
}

const mainContainer = document.querySelector('.main-container');
const sidebar = document.getElementById('sidebar');

const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');

button2.addEventListener('click', () => (mainContainer.style.display = 'none'));
button3.addEventListener(
  'mouseover',
  () =>
    (sidebar.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16)),
);
button4.addEventListener('click', () => (sidebar.innerHTML = 'Hola Mundo!'));

function mapProducts(products) {
  return products.map(createProduct);
}

function displayProducts() {
  const productsContainer = document.querySelector('.product-container');

  const arrayProducts = mapProducts(products);
  arrayProducts.forEach((product) => productsContainer.appendChild(product));
}

displayProducts();
