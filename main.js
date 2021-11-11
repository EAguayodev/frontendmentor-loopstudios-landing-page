// const open = document.getElementsByClassName('open');
// const close = document.getElementsByClassName('close');

function hamburgerFunction() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    hamburger.addEventListener('click', (e) => {
        if (menu === 'show') {
            menu.classList.toggle('show');
        } else {
            menu.classList.toggle('close');
        }
    });
}