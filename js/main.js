
const buttonToggle = document.getElementById('icon-open');
const closeMenu = document.getElementById('icon-close');
const menuBox = document.getElementById('menu-list');

buttonToggle.addEventListener('click', function(){
    if (menuBox) {
        document.getElementById('menu-list').style.display = 'block';
    } else {
        document.getElementById('menu-list').style.display = 'none';
    }
})

closeMenu.addEventListener('click', function(){
    if (menuBox) {
        document.getElementById('menu-list').style.display = 'none';
    } else {
        document.getElementById('menu-list').style.display = 'block';
    }
})
