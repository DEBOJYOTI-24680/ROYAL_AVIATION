const menu_btn = document.querySelector('.menu-btn');
const nav_links = document.querySelector('.nav-links');

menu_btn.addEventListener('click', () => {
    nav_links.classList.toggle('active')
})