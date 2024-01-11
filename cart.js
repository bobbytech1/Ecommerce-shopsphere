const cartItems = document.querySelector(".cart-products");
console.log(cartItems);

const arr = JSON.parse(localStorage.getItem("cartLists"));

function renderCartItems() {
    // cartItems.innerHTML = "";
  arr.forEach((cartItem) => {
    cartItems.innerHTML += `
      <div class="cart-cards">
        <img src="${cartItem.img}" width="100px" alt="" />
        <div class="price-txt">
           <h1>${cartItem.name}</h1>
           <p>Price : ${cartItem.price}</p>
        </div>
        <button>+</button>
        <span>${cartItem.numberOfUnit}</span>
        <button>-</button>
      </div>
      `;
  });
}
renderCartItems();
