"use strict";

///////////////////////////////////////////////////////////////////
const cartDisplay = document.querySelector(".cartDisplay");
const overlay = document.querySelector(".cart-overlay");
const cartIcon = document.querySelector(".card1");
///////////////////////////////////////////////////////////////////

function mafriculture() {
  ///////////////////////////// Toggle menu //////////////////////////////////
  function toggle() {
    const btn = document.getElementById("btn");
    const menu = document.querySelector(".nav-menu");

    btn.addEventListener("click", () => {
      let value = menu.classList.contains("navbar-collapse");

      // This checks if the navbar__collapse and change classes are added to
      // the menu ul if not it should add
      if (value) {
        menu.classList.remove("navbar-collapse");
        btn.classList.add("change");
      } else {
        menu.classList.add("navbar-collapse");

        btn.classList.remove("change");
      }
    });
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
  //////////////////////////////////////////////////////////////////////////////
}

mafriculture();
