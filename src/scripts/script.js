'use strict';

// input range
const range = document.querySelectorAll('.range__slider span input');
const progress = document.querySelector('.range__slider .progress');
const gap = 0.1;
const inputValue = document.querySelectorAll('.range__slider-numberVal input');

range.forEach((input) => {
  input.addEventListener('input', (e) => {
    const minRange = parseInt(range[0].value);
    const maxRange = parseInt(range[1].value);

    if (maxRange - minRange < gap) {
      if (e.target.className === 'range-min') {
        range[0].value = maxRange - gap;
      } else {
        range[1].value = minRange + gap;
      }
    } else {
      progress.style.left = (minRange / range[0].max) * 100 + '%';
      progress.style.right = 100 - (maxRange / range[1].max) * 100 + '%';
      inputValue[0].value = minRange;
      inputValue[1].value = maxRange;
    }
  });
});

// pagination
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const listNumbers = [...document.querySelectorAll('#numbers')];

const current = document.getElementsByClassName('active');
let isActive = listNumbers.indexOf(current[0]);

prevBtn.addEventListener('click', getPrev);
nextBtn.addEventListener('click', getNext);

function getNext(event) {
  event.preventDefault();
  prevBtn.classList.remove('disabled', 'disableEl');

  listNumbers[isActive].className = current[0].className.replace('active', '');
  listNumbers[isActive + 1].classList.add('active');
  isActive++;

  if (isActive === listNumbers.length - 1) {
    nextBtn.classList.add('disabled', 'disableEl');
  }
}

function getPrev(event) {
  event.preventDefault();

  listNumbers[isActive].className = current[0].className.replace('active', '');
  listNumbers[isActive - 1].classList.add('active');
  isActive--;

  if (isActive < 1) {
    prevBtn.classList.add('disabled', 'disableEl');
  }
  removeDisabledNextBtn();
}

listNumbers.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    current[0].className = current[0].className.replace('active', '');
    event.currentTarget.classList.add('active');
    isActive = listNumbers.indexOf(event.currentTarget);
    prevBtn.classList.remove('disabled', 'disableEl');
    removeDisabledNextBtn();
  });
});

function removeDisabledNextBtn() {
  if (isActive < listNumbers.length - 1) {
    nextBtn.classList.remove('disabled', 'disableEl');
  }
}
