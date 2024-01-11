let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

const initApp = () => {
    // get data product
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();

// Function to filter elements based on search input
function searchSite() {
    var input = document.getElementById('searchInput').value.toUpperCase();
    var elements = document.querySelectorAll('.searchable p'); // Adjust the selector based on elements you want to search
  
    elements.forEach(function(element) {
      var textValue = element.textContent || element.innerText;
      if (textValue.toUpperCase().indexOf(input) > -1) {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    });
  }
  
  // Add event listener to the search input
  document.getElementById('searchInput').addEventListener('input', searchSite);

  // Function to update cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Clear previous cart items
  
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItemsElement.appendChild(cartItem);
    });
  }
  
  let cart = [];

  // Function to update cart display
  function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Clear previous cart items
  
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.textContent = `${item.name} - $${item.price}`;
      cartItemsElement.appendChild(cartItem);
    });
  }
  
  // Function to retrieve cart from local storage
  function loadCartFromStorage() {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
      cart = JSON.parse(cartFromStorage);
      updateCartDisplay();
    }
  }
  
  // Function to save cart to local storage
  function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Function to handle adding to cart
  function addToCartClicked(event) {
    const button = event.target;
    const product = button.parentElement;
    const productName = product.querySelector('h2').innerText;
    const productPriceString = product.querySelector('p').innerText;
    const productPrice = parseFloat(productPriceString.replace('Price: $', ''));
  
    // Add item to cart object
    cart.push({ name: productName, price: productPrice });
  
    // Update cart display
    updateCartDisplay();
  
    // Save cart to local storage
    saveCartToStorage();
  }
  
  // Get all 'Add to Cart' buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  // Attach event listeners to 'Add to Cart' buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartClicked);
  });
  
  // Load cart from local storage when the page loads
  document.addEventListener('DOMContentLoaded', loadCartFromStorage);
  