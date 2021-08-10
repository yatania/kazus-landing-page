'use strict';

const page = document.querySelector('.page');
const toggler = document.querySelector('.header__toggler');
const header = document.querySelector('.header');
const basket = document.querySelector('.header__basket-button');
const modal = document.querySelector('.modal');
const list = document.querySelector('.nav__list');
const closeButton = document.querySelector('.modal__closer');
const nextButton = document.querySelector('.shop__button-next');
const previousButton = document.querySelector('.shop__button-prev');
const numbers = document.querySelectorAll('.shop__page');

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

let i = 2;

const activeNumber = (n) => {
  for (const number of numbers) {
    number.classList.remove('shop__page--active');
  }
  numbers[n].classList.add('shop__page--active');
};

const nextNumber = () => {
  return () => {
    if (i === numbers.length - 1) {
      i = 0;
      activeNumber(i);
    } else {
      i++;
      activeNumber(i);
    }
  };
};

const prevNumber = () => {
  return () => {
    if (i === 0) {
      i = numbers.length - 1;
      activeNumber(i);
    } else {
      i--;
      activeNumber(i);
    }
  };
};

nextButton.addEventListener('click', nextNumber());

previousButton.addEventListener('click', prevNumber());
