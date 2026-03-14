const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    if (navMenu.classList.contains('open')) {
        menuButton.innerHTML = 'X'; 
    } else {
        menuButton.innerHTML = '&#9776;'; 
    }
});

const currentYearElement = document.querySelector('#currentyear');
const today = new Date();
currentYearElement.textContent = today.getFullYear();

const lastModifiedElement = document.querySelector('#lastModified');
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;