// TOGGLE ORDER FORM ON
document
  .querySelector(".product-page__order-button")
  .addEventListener("click", function () {
    const orderForm = document.querySelector(".product-page__order-form");
    orderForm.classList.toggle("product-page__order-form--hidden");
  });
