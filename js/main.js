"use strict";

///////////////////////////////////////////////////////////////////
const cartDisplay = document.querySelector(".cartDisplay");
const overlay = document.querySelector(".cart-overlay-1");
const overlay2 = document.querySelector(".overlay-2");
const cartIcon = document.querySelector(".card1");
const closeCart = document.querySelector(".close-cart");
///////////////////////////////////////////////////////////////////

function mafriculture() {
  ///////////////////////////// Toggle menu //////////////////////////////////
  function toggle() {
    const btn = document.getElementById("btn");
    const menu = document.querySelector(".nav-menu");

    const addRemove = () => {
      let value = menu.classList.contains("navbar-collapse");

      // This checks if the navbar__collapse and change classes are added to
      // the menu ul if not it should add
      if (value) {
        menu.classList.remove("navbar-collapse");
        overlay2.classList.remove("hide");
        btn.classList.add("change");
      } else {
        menu.classList.add("navbar-collapse");
        overlay2.classList.add("hide");
        btn.classList.remove("change");
      }
    };

    btn.addEventListener("click", addRemove);
    overlay2.addEventListener("click", addRemove);
  }

  toggle();
  ///////////////////////////////////////////////////////////////////////////

  ////////////////////// Slide down and hide cart /////////////////////////////////

  const slideCartDown = () => {
    if (cartDisplay.classList.contains("hide")) {
      cartDisplay.classList.remove("hide");
      overlay.classList.remove("hide");
    } else {
      cartDisplay.classList.add("hide");
      overlay.classList.add("hide");
    }
  };

  cartIcon.addEventListener("click", slideCartDown);

  overlay.addEventListener("click", slideCartDown);

  closeCart.addEventListener("click", slideCartDown);
  //////////////////////////////////////////////////////////////////////////////
}

mafriculture();
