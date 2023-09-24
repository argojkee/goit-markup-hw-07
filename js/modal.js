const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  bodyEl: document.querySelector('body'),
};

(() => {
  refs.openModalBtn.addEventListener('click', () => {
    let paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

    refs.bodyEl.style.paddingRight = paddingOffSet;
    refs.bodyEl.style.overflow = 'hidden';

    refs.bodyEl.addEventListener('keydown', onEscPress);
    refs.bodyEl.addEventListener('click', onBackdropClick);
    toggleModal();
  });
  refs.closeModalBtn.addEventListener('click', () => {
    backdropRemoveEventListener();
    toggleModal();
  });
})();

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

// Backdrop

function onEscPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  refs.modal.classList.add('is-hidden');
  backdropRemoveEventListener();
}

function onBackdropClick() {
  if (event.target !== refs.modal) {
    return;
  }

  backdropRemoveEventListener();
  toggleModal();
}

function backdropRemoveEventListener() {
  refs.bodyEl.style.overflow = 'auto';
  refs.bodyEl.style.paddingRight = '0px';

  refs.bodyEl.removeEventListener('keydown', onEscPress);
  refs.bodyEl.removeEventListener('click', onBackdropClick);
}
