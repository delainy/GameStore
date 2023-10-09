// Menu suspenso do Navbar 
//Falha
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx');
    navbar.classList.toggle('open');
}