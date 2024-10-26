"use strict";

const showButton = document.querySelector('.show')
const hideBtn = document.querySelector('.hide')
const menu = document.querySelector('.mobile-link')
const overlay = document.querySelector('.overlay')

console.log(showButton);

showButton.addEventListener('click', ()  => {
    showButton.style.display = 'none'
    hideBtn.style.display = 'inline-block'
    menu.style.display = 'block'
    overlay.style.display = 'block'
})

hideBtn.addEventListener('click', ()  => {
    showButton.style.display = 'inline-block'
    hideBtn.style.display = 'none'
    menu.style.display = 'none'
    overlay.style.display = 'none'
})