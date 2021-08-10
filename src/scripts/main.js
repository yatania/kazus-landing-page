'use strict';

const page = document.querySelector('.page');
const toggler = document.querySelector('.header__toggler');
const header = document.querySelector('.header');
const basket = document.querySelector('.header__basket-button');
const modal = document.querySelector('.modal');
const list = document.querySelector('.nav__list');
const closeButton = document.querySelector('.modal__closer');

toggler.addEventListener('click', () => {
  header.classList.toggle('menu-open');
  page.classList.toggle('page--hidden');
});

list.addEventListener('click', () => {
  header.classList.remove('menu-open');
  page.classList.remove('page--hidden');
});

basket.addEventListener('click', () => {
  modal.classList.toggle('modal--opener');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('modal--opener');
});
