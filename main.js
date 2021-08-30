const burgerMenu = document.querySelector('.mobile-menu')
const topMenu = document.querySelector('.header-nav')
console.log(topMenu)

burgerMenu.addEventListener('click', () => {
    topMenu.classList.toggle('show')
})
// Hide menu  when click nav links
const  menulinks = document.querySelectorAll('.header-nav a')
menulinks.forEach(item => item.addEventListener('click', () => {
    topMenu.classList.remove('show')
}))