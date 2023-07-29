
// main.js

const modalWindowForm = document.getElementById("modal");
const windowThanks = document.getElementById('thank-you-popup');
const myForm = document.getElementById('myForm');
const btnClose = document.getElementById("close");
const bodyScroll = document.body;

bodyScroll.addEventListener('click', (event) => {
  const targetElement = event.currentTarget;

  if (event.target.classList.contains('btn')) {
    open();
  } else if (targetElement === btnClose || btnClose.contains(event.target)) {
    close(); 
  }
});

modalWindowForm.addEventListener('submit', (event) => {
  event.preventDefault();
  close();
  setTimeout(openThankWindow, 250);
  setTimeout(closeThankWindow, 2500);
});

function open() {
  modalWindowForm.classList.remove('isHiden');
  bodyScroll.classList.add('noScroll');
  modalWindowForm.classList.remove('close');
  modalWindowForm.classList.add('open');
}

function openThankWindow(){
  windowThanks.classList.remove('isHiden');
  windowThanks.classList.remove('close');
  windowThanks.classList.add('open');
}

function closeThankWindow(){
  windowThanks.classList.add('isHiden');
  windowThanks.classList.remove('open');
  windowThanks.classList.add('close');
}

function close() {
  myForm.reset();
  modalWindowForm.classList.add('isHiden');
  bodyScroll.classList.remove('noScroll');

  modalWindowForm.classList.remove('open');
  modalWindowForm.classList.add('close');
}
