'use strict';

const modals = document.querySelectorAll('.modal');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

let modal;
// Function to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open modal events
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal = modals[i];
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Close modal events
for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', closeModal);
  
}
// Close modal when clicking on overlay
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e){ //event listener for keyboard
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})