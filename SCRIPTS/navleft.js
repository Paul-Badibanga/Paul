/*--------------NAV BAR SWITCH---------------------*/

let menuEl = document.querySelector('.js-menu')
let navLeft = document.querySelector('.js-left-nav');
let toggleElem = document.getElementById('menu')
console.log(toggleElem.innerHTML)

/*----------------------menu logo image-toggle---------------------*/
const menuLogo = {
    open:'IMAGES/menu.png',
    close:'IMAGES/cross.png'
}
console.log(menuLogo.open)
toggleElem.innerHTML = `<img src="${menuLogo.close}" class="js-menu">`
menuEl.addEventListener('click', (e)=>{
    
   const active = navLeft.classList.toggle('js-left-nav')
   console.log(active)
   if (active === false){
    navLeft.style.width = "200px"
    //toggleElem.innerHTML = `<img src="${menuLogo.close}" class="js-menu">`
    console.log(toggleElem.innerHTML)
   }else {
    navLeft.style.width = "0px"
    //toggleElem.innerHTML = `<img src="${menuLogo.open}" class="js-menu">`
   }
})