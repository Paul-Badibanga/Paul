/*--------------NAV BAR SWITCH---------------------*/

let menuEl = document.querySelector('.js-menu')
let navLeft = document.querySelector('.js-left-nav');


menuEl.addEventListener('click', ()=>{
    
    if (navLeft.style.width === "0px"){
        navLeft.style.width = "200px"
    }else {
        navLeft.style.width = "0px"
    }
    
})