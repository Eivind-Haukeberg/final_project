// TOGGLE ORDER FORM ON
document
  .querySelector(".product-page__order-button")
  .addEventListener("click", function () {
    const orderForm = document.querySelector(".product-page__order-form");
    orderForm.classList.toggle("product-page__order-form--hidden");
  });


  const shopItems = [
    {
      type: "shirt",
      id: "shirt-mclaren.html",
      team: "McLaren",
      price: 30,
      image: "../../assets/images/shop/shirt_mclaren.avif",
    },
    {
      type: "cap",
      id: "cap-mclaren.html",
      team: "McLaren",
      price: 20,
      image: "../../assets/images/shop/cap_mclaren.avif",
    },
    {
      type: "shirt",
      id: "shirt-williams.html",
      team: "Williams",
      price: 32,
      image: "../../assets/images/shop/shirt_williams.avif",
    },
    {
      type: "cap",
      id: "cap-williams.html",
      team: "Williams",
      price: 25,
      image: "../../assets/images/shop/cap_williams.avif",
    },
    {
      type: "shirt",
      id: "shirt-redbull.html",
      team: "Red Bull",
      price: 35,
      image: "../../assets/images/shop/shirt_redbull.avif",
    },
    {
      type: "cap",
      id: "cap-redbull.html",
      team: "Red Bull",
      price: 28,
      image: "../../assets/images/shop/cap_redbull.avif",
    },
    {
      type: "shirt",
      id: "shirt-ferrari.html",
      team: "Ferrari",
      price: 29,
      image: "../../assets/images/shop/shirt_ferrari.avif",
    },
    {
      type: "cap",
      id: "cap-ferrari.html",
      team: "Ferrari",
      price: 22,
      image: "../../assets/images/shop/cap_ferrari.avif",
    },
    {
      type: "shirt",
      id: "shirt-mercedes.html",
      team: "Mercedes",
      price: 30,
      image: "../../assets/images/shop/shirt_mercedes.avif",
    },
    {
      type: "cap",
      id: "cap-mercedes.html",
      team: "Mercedes",
      price: 24,
      image: "../../assets/images/shop/cap_mercedes.avif",
    },
  ];




// LOAD PRODUCT DETAILS IN HTML
function loadProductDetails() {
  
  const currentPage = window.location.pathname.split("/").pop(); // had to google this. I understand it, but would have never thought of it.

  const product = shopItems.find(function(item) {
    return item.id === currentPage;
  });

  if (product) {
    const productImage = document.querySelector(".product-page__image img");
    const productTitle = document.querySelector(".product-page__title");
    const productPrice = document.querySelector(".product-page__price");

    productImage.src = product.image;
    productImage.alt = `${product.team} ${product.type}`;
    productTitle.textContent = `${product.team} ${product.type}`;
    productPrice.textContent = `$${product.price}`;
  } 
}

loadProductDetails();