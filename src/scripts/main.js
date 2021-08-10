'use strict';

const toggler = document.querySelector('.header__toggler');
const header = document.querySelector('.header');

toggler.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});
