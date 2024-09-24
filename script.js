// Script for navigation bar
/*const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
*/
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const close = document.getElementById('close');
    const navLinks = document.querySelector('.nav-links ul');

    if (menuIcon && navLinks) {  // Check if the elements exist
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Optional: Close the menu when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
    } else {
        console.error('Menu icon or navigation links not found.');
    }
   
});