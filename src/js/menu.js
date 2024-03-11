let menu = document.querySelector('#menu');
let openMenu = document.querySelector('#open-menu');
let closeMenu = document.querySelector('#close-menu');
let refs = document.querySelectorAll('.ref');

openMenu.onclick = () => {
    menu.style.top = '0';
}

refs.onclick = () => {
    menu.style.top = '-100vh';
}

closeMenu.onclick = () => {
    menu.style.top = '-100vh';
}