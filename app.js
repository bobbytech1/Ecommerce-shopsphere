const products_container = document.querySelector(".tsp-cards");
const cart_items = document.querySelector(".cart-items");
let product_list = [];

const getProducts = () => {
  fetch("./products.json")
    .then((res) => res.json())
    .then((data) => {
      product_list = data;
      console.log(product_list);

      product_list.forEach((item) => {
        products_container.innerHTML += `
        
                <div class="tsp-card">
                    <div class="image">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="txt">
                        <p>${item.name}</p>
                        <span class="sub-txt">
                            <span>${item.price}</span>
                            <button onclick="addToCart(${item.id});" id="addToCart"> add to cart<iconify-icon
                                    icon="gridicons:add-outline" style="font-size: 15px;"></iconify-icon></button>
                        </span>
                    </div>
                </div>
                `;
              });
            });
};
getProducts();

const cart = [];

function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    cart.forEach((item) => {
      item.numberOfUnit += 1;
      console.log(item.numberOfUnit);
      
    })
  } else {
    const items = product_list.find((item) => item.id === id);
    cart.push({
      ...items,
      numberOfUnit: 1,
    });
    console.log(cart);
  }

  let total = 0;
cart.forEach((item) => {
  total += item.numberOfUnit
  document.querySelector('#cartNum').innerHTML = total;
})
  
  localStorage.setItem("cartLists", JSON.stringify(cart));
  cartUpdateFunction();
  renderCartItems();
}

function cartUpdateFunction() {}
// localStorage.setItem("cart", JSON.stringify(cart));




let currentNumber = 10;

function increaseNum(){
  currentNumber++;
  document.getElementById("cartNum").innerText = currentNumber
}

var btnClick = document.getElementById('addToCart');

btnClick.addEventListener("click", increaseNum);


