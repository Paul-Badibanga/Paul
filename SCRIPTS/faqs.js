let extendBtn = document.querySelector('.js-plus')
let answer = document.querySelector('.js-answer')
extendBtn.addEventListener('click', (e)=>{
    answer.classList.toggle('answer')
    console.log(answer.classList)
    if(answer.classList.contains('answer')) {
        console.log('Clicked')
        answer.style.display = 'block'
        extendBtn.innerHTML = "-"
    }else{
        console.log('unclicked')
        answer.style.display = 'none'
        extendBtn.innerHTML = "+"
    }
})

let extendBtn2 = document.querySelector('.js-plus2')
let answer2 = document.querySelector('.js-answer2')
extendBtn2.addEventListener('click', (e)=>{
    answer2.classList.toggle('answer2')
    console.log(answer.classList)
    if(answer2.classList.contains('answer2')) {
        console.log('btn2 is Clicked')
        answer2.style.display = 'block'
        extendBtn2.innerHTML = "-"
    }else{
        console.log('unclicked')
        answer2.style.display = 'none'
        extendBtn2.innerHTML = "+"
    }
})

let extendBtn3 = document.querySelector('.js-plus3')
let answer3 = document.querySelector('.js-answer3')
extendBtn3.addEventListener('click', (e)=>{
    answer3.classList.toggle('answer3')
    console.log(answer3.classList)
    if(answer3.classList.contains('answer3')) {
        console.log('btn2 is Clicked')
        answer3.style.display = 'block'
        extendBtn3.innerHTML = "-"
    }else{
        console.log('unclicked')
        answer3.style.display = 'none'
        extendBtn3.innerHTML = "+"
    }
})

let extendBtn4 = document.querySelector('.js-plus4')
let answer4 = document.querySelector('.js-answer4')
extendBtn4.addEventListener('click', (e)=>{
    answer4.classList.toggle('answer4')
    console.log(answer4.classList)
    if(answer4.classList.contains('answer4')) {
        console.log('btn2 is Clicked')
        answer4.style.display = 'block'
        extendBtn4.innerHTML = "-"
    }else{
        console.log('unclicked')
        answer4.style.display = 'none'
        extendBtn4.innerHTML = "+"
    }
})