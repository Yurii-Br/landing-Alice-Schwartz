'use strict'
const btnBurgerOpen = document.querySelector('.open-menu');
const btnBurgerClose = document.querySelector('.burger-close');
const menuBurger = document.querySelector('.menu-burger');
const closeMenuLink = document.querySelectorAll('.mob-link');


btnBurgerOpen.addEventListener('click',() => {
  menuBurger.classList.add('menuIsOpen');

});
btnBurgerClose.addEventListener('click',() => {
    menuBurger.classList.remove('menuIsOpen');

  });

const closeMenuB = closeMenuLink.forEach((el) => 
{  el.addEventListener('click',() => 
{ 
    menuBurger.classList.remove('menuIsOpen');
} 

);})
