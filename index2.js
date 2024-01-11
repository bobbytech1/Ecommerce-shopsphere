const displayName = document.querySelector(".all");
const bar = document.querySelector("#go");
const goTo = document.querySelector("#icon");



bar.addEventListener("click", bringNav);

function bringNav(){
    displayName.classList.add("hide");
    
 }
 goTo.addEventListener("click", ()=>{
    displayName.classList.remove("hide");
 });