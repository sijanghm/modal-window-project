'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click', showModalFunction);
}

function showModalFunction(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

closeModal.addEventListener('click', closeModalFunction);

function closeModalFunction(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//close modal using escape key
document.addEventListener('keydown', keydownFunction);

function keydownFunction(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModalFunction();
        }
    }
}