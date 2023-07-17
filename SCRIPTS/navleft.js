/*--------------NAV BAR SWITCH---------------------*/

let menuEl = document.querySelector('.js-menu')
let navLeft = document.querySelector('.js-left-nav');
let changeImage = document.querySelector('.menu')


changeImage.addEventListener('click', ()=>{
    navLeft.classList.toggle('js-left-nav');
    console.log(navLeft.classList);
    if(navLeft.classList.contains('js-left-nav')){
        console.log('navleft gone')
        navLeft.style.width = '0px'
        changeImage.innerHTML = `<img src = "IMAGES/menu.png" class = "js-menu">`
    }else {
        console.log('navleft dispo')
        navLeft.style.width = '200px'
        changeImage.innerHTML = `<img src = "IMAGES/red-close.png" class = "js-menu">`
        
    }
})

/*---------------------selection option bar--------------------------*/
let selection = document.getElementById('choice');
let labelEL = document.getElementsByTagName('label')
/*console.log(labelEL.innerHTML);*/
selection.addEventListener('click', (e)=>{
    e.target.value
})

/*-------------------------sub-class-btn--------------------*/
let expandIcon = document.querySelector('.expand-down-btn');
var subList = document.getElementById('sub-list'); 

expandIcon.addEventListener('click', ()=>{
    
    subList.classList.toggle('sub-list')
    if(subList.classList.contains('sub-list')){
        subList.style.display = 'block'
        console.log('hi')
    }
    else {
        subList.style.display = 'none'
        console.log('bye')
    }
})
