const toggleMenuElement = document.getElementById('toggle-menu');
const menuItemsElement = document.getElementById('menu-items');

toggleMenuElement.addEventListener('click', ()=>{
    menuItemsElement.classList.toggle('menu-items--show');
    toggleMenuElement.classList.toggle('toggle-menu--rotate');
});