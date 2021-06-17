"use strict";

//////////////////////////////////////////////////////////////////
const productDisplay = document.querySelector(".product-display");
const cartItemsContainer = document.querySelector(".cart-centent");
const itemsIncart = document.querySelectorAll(".cart-item");
const removeItemFromCart = document.querySelectorAll(".remove-item");
const increaseAmount = document.querySelectorAll(".increment");
const decreaseAmount = document.querySelectorAll(".decrement");
const count = document.querySelectorAll(".count");
const cartIconCount = document.querySelector(".number-items-incart");
const clearCart = document.querySelector(".clear-cart");
const totalPrice = document.querySelector(".cart-total");

let cart = [];
let addToCartButtons = [];
//////////////////////////////////////////////////////////////////

// UI
class UI {
  ///////////// This displays products from the Json file //////////////
  displayProducts(obj) {
    let results = "";
    obj.forEach(({ id, title, price, image }) => {
      results += `
                <div class="col-4 card" id="p4">
                <a href="product-details.html"><img src=${image} alt=""/></a>
                <h3>${title}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                  <button class="addToCart" data-id="${id}">Add to cart</button>
                  <p>FCFA ${price}</p>
                </div>`;
    });
    productDisplay.innerHTML = results;
  }
  ////////////////////////////////////////////////////////////////////////////

  /////////////////////////// Add items to cart //////////////////////////////
  addItemsToCart() {
    const addToCartBtn = [...document.querySelectorAll(".addToCart")];

    // This now assigns the buttons to the addToCartButtons array created at the start above
    addToCartButtons = addToCartBtn;

    addToCartButtons.map((button) => {
      // This will get the data atribute of the buttons which is the id and assign it to this id variable
      const id = button.dataset.id;

      // This checks to see if the item with a paticular id is in the cart
      const incart = cart.find((item) => item.id === parseInt(id, 10));

      if (incart) {
        button.innerText = "In Cart";
        button.disabled = true;
      }

      //////////////////////////
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.innerText = "In Cart";
        event.target.disabled = true;

        // Get product from the using the getProduct() function of the Storage class
        // So essentially what this does is to get a product already stored in the localStorage by the getProduct functtion
        const cartItem = { ...Storage.getProducts(id), amount: 1 };

        // Add product to cart
        // This spreads the cart items if there is any, and then add the cartItem
        cart = [...cart, cartItem];

        // Save the product that has been clicked in the local storage
        Storage.saveCart(cart);

        // This will set cart values such as number of items, total price etc
        // by calling the setItemValues function below
        this.setItemValues(cart);

        // Display Items in cart
        this.addCartItem(cartItem);
      });
    });
  }

  // This defines cart item values
  setItemValues(cart) {
    let tempTotal = 0;
    let itemTotal = 0;

    cart.map((item) => {
      // This calculates the total price of items
      tempTotal += item.price * item.amount;

      /////////////////////////////
      itemTotal += item.amount;
    });

    // This assigns the total price to the total in display
    totalPrice.innerText = parseFloat(tempTotal.toFixed(2));

    /////////////////////////////
    cartIconCount.innerText = itemTotal;
  }

  // This displays items in cart
  addCartItem({ image, price, title, id }) {
    const itemHtml = document.createElement("div");
    itemHtml.classList.add("cart-item");
    itemHtml.innerHTML = `<img src="${image}" alt="" />
            <div>
              <h3>${title}</h3>
              <h3 class="price">FCFA ${price}</h3>
            </div>
            <div>
              <span class="increment" data-id=${id}>^</span>
              <p class="count">1</p>
              <span class="decrement" data-id=${id}>V</span>
            </div>

            <div>
              <span class="remove-item" data-id=${id} > delete </span>
            </div>`;
    /* 
    // We could still set cart items like this;

    cartItemsContainer.innerHTML += itemHtml;
 */
    cartItemsContainer.appendChild(itemHtml);
  }

  setAPP() {
    cart = Storage.getCart();
    this.setItemValues(cart);
    this.populate(cart);
  }

  populate(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }

  ////////////////////////////////////////////////////////////////////////////
}

// Products
class Products {
  // This will get the products from the JSON by fetching them
  // Because we will be fetching data from an external source, it might be delaying or might encounter
  // errors so we will be using asyncronous and try catch.

  async getProducts() {
    // Because we will be dealing with get data from external source, we need to use the
    // try catch method so that it will catch any error that will arrise along the way like this;

    try {
      // This will go and fetch the data, assign the data to the recievedData variable
      const results = await fetch("../js/products.json");
      const recievedData = await results.json();

      // This will extract the items object which is in the fetched data
      const products = recievedData.items;

      // This will return the products to be used outside this function
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}

// Storage
// The purpose of this is to store the items in local storage so that items added to cart do not disapear when page reloads

class Storage {
  ///////////////////////// This will save to local storage
  static saveProducts(obj) {
    localStorage.setItem("products", JSON.stringify(obj));
  }

  ///////////////////////// When items are added to cart, this will save them so that they don't disapear from the cart when reloaded
  static saveCart(cart) {
    localStorage.setItem("carts", JSON.stringify(cart));
  }

  //////////////////////////
  static getProducts(id) {
    // This will convert the Json item to html element so that we can then get the id data atribute
    const products = JSON.parse(localStorage.getItem("products"));

    return products.find((item) => item.id === parseInt(id));
  }

  ///////////////////////////
  static getCart() {
    // This checks if localStorage got cart then it converts then Json file recived
    // if not it should just return an empty array
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

// This will update the DOM after loading
document.addEventListener(
  "DOMContentLoaded" /* because the getProducts() is async, to call it here, we must also make this async like this; */,
  async () => {
    const ui = new UI();
    const products = new Products();

    ui.setAPP();

    // This will collect the products we recieve from the getProduct() of the Products class at
    // runtime
    const productsObj = await products.getProducts();

    // This will display the products in the UI at runtime using the display function of the UI class
    // by recieving the products through the productobj as its parameter

    ui.displayProducts(productsObj);
    ui.addItemsToCart();

    Storage.saveProducts(productsObj);

    ui.cartLogic();
  }
);
