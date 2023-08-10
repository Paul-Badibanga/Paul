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
        navLeft.style.width = '220px'
        changeImage.innerHTML = `<img src = "IMAGES/red-close.png" class = "js-menu">`
        
    }
})

/*---------------------selection option bar--------------------------*/
let selection = document.getElementById('choice');
let labelEL = document.getElementsByTagName('label')

/*-------------------------sub-class-btn--------------------*/
let expandIcon = document.querySelector('.expand-down-btn');
var subList = document.getElementById('sub-list'); 

expandIcon.addEventListener('click', (e)=>{
    subList.classList.toggle('sub-list');
})

/*-------------------------sub-services---------------------------*/
const services = {
    plumbing: {
        parent:document.querySelector('.plumbing'),
        child:document.querySelector('.sub-plumb'),
        plus:document.querySelector('.plumb-plus'),
    },
    electricity: {
        parent:document.querySelector('.electricity'),
        child:document.querySelector('.sub-elec'),
        plus:document.querySelector('.elec-plus'),
    },
    info: {
        parent:document.querySelector('.informatics'),
        child:document.querySelector('.sub-info'),
        plus:document.querySelector('.info-plus'),
    },
    welding: {
        parent:document.querySelector('.welding'),
        child:document.querySelector('.sub-welding'),
        plus:document.querySelector('.welding-plus'),
    }
}

console.log(services.electricity.parent)
services.electricity.parent.addEventListener('click', ()=>{
    services.electricity.child.classList.toggle('sub-elec');
    if(services.electricity.child.classList.contains('sub-elec')){
        services.electricity.plus.innerHTML = '+'
    }else{
        services.electricity.plus.innerHTML = '-'
    }
})

services.plumbing.parent.addEventListener('click', ()=>{
    services.plumbing.child.classList.toggle('sub-plumb');
    if(services.plumbing.child.classList.contains('sub-plumb')){
        services.plumbing.plus.innerHTML = '+';
    }else{
        services.plumbing.plus.innerHTML = '-'
    }
})

services.info.parent.addEventListener('click', ()=>{
    services.info.child.classList.toggle('sub-info');
    if(services.info.child.classList.contains('sub-info')){
        services.info.plus.innerHTML = '+';
    }else{
        services.info.plus.innerHTML = '-'
    }
})

services.welding.parent.addEventListener('click', ()=>{
    services.welding.child.classList.toggle('sub-welding');
    if(services.welding.child.classList.contains('sub-welding')){
        services.welding.plus.innerHTML = '+';
    }else{
        services.welding.plus.innerHTML = '-'
    }
})

/*------------------------ONCLICK SERVICE BUTTON----------------------*/
var service = document.getElementById('service-btn');
var serviceContainer = document.querySelector('.sub-serv-js');
service.addEventListener('click', ()=> {
    const toggle = serviceContainer.classList.toggle('sub-serv-js')
    console.log(toggle)
    if (toggle === false) {
        serviceContainer.style.display = 'block'
    }else {
        serviceContainer.style.display = 'none'
    }
})