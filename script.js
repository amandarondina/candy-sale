import products from "./data.js";
const result = document.getElementById("results");
const sweetBtn = document.getElementById("sweet-btn");
const savoryBtn = document.getElementById("savory-btn");

let sweets = [];
let savory = [];

const clear = document.createElement("button");
clear.innerText = "Clear";

const getSaleItems = (data) => {
  savory = products.filter((product) => product.type === "savory");
  sweets = products.filter((product) => product.type === "sweet");

  sweetBtn.addEventListener("click", function () {
    const shoppingCart = document.createElement("div");
    document.getElementById("cart").appendChild(clear);
    sweets.map((sweet) => {
      result.innerHTML = " ";
      shoppingCart.innerHTML += ` <p>${sweet.item} - ${sweet.price}</p>`;
      result.appendChild(shoppingCart);
    });
  });

  savoryBtn.addEventListener("click", function () {
    const shoppingCart = document.createElement("div");
    document.getElementById("cart").appendChild(clear);
    savory.map((snacks) => {
      result.innerText = " ";
      shoppingCart.innerHTML += ` <p>${snacks.item} - ${snacks.price}</p> `;
      result.appendChild(shoppingCart);
    });
  });

  clear.addEventListener("click", function () {
    result.innerText = "";
    clear.remove();
  });
};

getSaleItems();
