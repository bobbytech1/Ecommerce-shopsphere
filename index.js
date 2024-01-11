document.getElementById("ham").addEventListener("click", function() {
    document.querySelector(".nav4").style.display = "block";
});

document.getElementById("cancelBtn").addEventListener("click", function() {
    document.querySelector(".nav4").style.display = "none";
});

const buttons = document.querySelectorAll('#addToCart');
const img = document.querySelector('.image');
const txt = document.querySelector('.txt');


buttons.forEach(button => {

    button.addEventListener('click', () => {
        const cartItems = {
            img: img.outerHTML,
            txt: txt.outerHTML,
        }

        const cards = JSON.stringify(cartItems)
        localStorage.setItem('cards', cards)
    })
})
