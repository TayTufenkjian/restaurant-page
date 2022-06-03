import './style.css';
import homePageComponent from './homePage.js';
import menuComponent from './menuPage.js';
import contactComponent from './contactPage.js';

document.addEventListener('DOMContentLoaded', () => {
    const contentElement = document.getElementById('content'); 
    homePageComponent();

    document.getElementById('home').addEventListener('click', () => {
        contentElement.innerHTML = '';
        homePageComponent();
    });

    document.getElementById('menu').addEventListener('click', () => {
        contentElement.innerHTML = '';
        menuComponent();
    });

    document.getElementById('contact').addEventListener('click', () => {
        contentElement.innerHTML = '';
        contactComponent();
    });
})