// SHOP ITEMS
const shopItems = [
  {
    type: "shirt",
    team: "McLaren",
    price: 30,
    image: "../assets/images/shop/shirt_mclaren.avif",
    link: "./shop/mclaren-shirt.html",
  },
  {
    type: "cap",
    team: "McLaren",
    price: 20,
    image: "../assets/images/shop/cap_mclaren.avif",
    link: "./shop/cap-mclaren.html",
  },
  {
    type: "shirt",
    team: "Williams",
    price: 32,
    image: "../assets/images/shop/shirt_williams.avif",
    link: "./shop/williams-shirt.html",
  },
  {
    type: "cap",
    team: "Williams",
    price: 25,
    image: "../assets/images/shop/cap_williams.avif",
    link: "./shop/williams-cap.html",
  },
  {
    type: "shirt",
    team: "Red Bull",
    price: 35,
    image: "../assets/images/shop/shirt_redbull.avif",
    link: "./shop/redbull-shirt.html",
  },
  {
    type: "cap",
    team: "Red Bull",
    price: 28,
    image: "../assets/images/shop/cap_redbull.avif",
    link: "./shop/redbull-cap.html",
  },
  {
    type: "shirt",
    team: "Ferrari",
    price: 29,
    image: "../assets/images/shop/shirt_ferrari.avif",
    link: "./shop/ferrari-shirt.html",
  },
  {
    type: "cap",
    team: "Ferrari",
    price: 22,
    image: "../assets/images/shop/cap_ferrari.avif",
    link: "./shop/ferrari-cap.html",
  },
  {
    type: "shirt",
    team: "Mercedes",
    price: 30,
    image: "../assets/images/shop/shirt_mercedes.avif",
    link: "./shop/mercedes-shirt.html",
  },
  {
    type: "cap",
    team: "Mercedes",
    price: 24,
    image: "../assets/images/shop/cap_mercedes.avif",
    link: "./shop/mercedes-cap.html",
  },
];




// VARIABLES FROM HTML ELEMENTS
const shopGrid = document.querySelector(".shop__grid");
const filterDropdown = document.querySelector(".shop__filter-dropdown");





// ITEMS IN SHOP
function renderShopItems(items) {
  shopGrid.innerHTML = "";

  items.forEach(function (item) {
    // CREATE CARD
    const itemCard = document.createElement("a");
    itemCard.className = "shop__item";
    itemCard.href = item.link;

    // HTML FOR CARD
    itemCard.innerHTML = `
      <img class="shop__item-image" src="${item.image}" alt="${item.team} ${item.type}">
      <div class="shop__item-details">
        <h3 class="shop__item-title">${item.team} ${item.type}</h3>
        <p class="shop__item-price">Price: $${item.price}</p>
      </div>
    `;

    // ADD CARD TO GRID
    shopGrid.appendChild(itemCard);
  });
}


// SHOW ALL BY DEFAULT
renderShopItems(shopItems);




// DROPDOWN FILTER
filterDropdown.addEventListener("change", function () {
  const selectedType = filterDropdown.value;

  const filteredItems =
    selectedType === "all"
      ? shopItems
      : shopItems.filter(function (item) {
          return item.type === selectedType;
        });

  // RENDER FILTER
  renderShopItems(filteredItems);
});
