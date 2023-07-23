const elButton  = document.querySelector(".header__menu")
const elMenubutton = document.querySelector(".menubutton")
const elextbutton = document.querySelector(".extbutton")
const elNavButton = document.querySelector(".nav")
    

elButton.addEventListener('click', () => {
    elMenubutton.classList.toggle('menubutton__menu')
    elextbutton.classList.toggle('extmenu__ext')
    elNavButton.classList.toggle('nav__blok')
})
