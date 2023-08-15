/*------------------------ONCLICK SERVICE BUTTON----------------------*/
var service = document.getElementById('service-btn');
var serviceContainer = document.querySelector('.sub-serv-js');
service.addEventListener('click', ()=> {
    const toggle = serviceContainer.classList.toggle('sub-serv-js')
    if (toggle === false) {
        serviceContainer.style.display = 'block'
    }else {
        serviceContainer.style.display = 'none'
    }
})