const submitBtnEl = document.querySelector('.js-submit-form-btn');
const formEl = document.querySelector('.js-speaker-form');

disabledSubmitButton();

formEl.addEventListener('input', onFormChange);

function onFormChange() {
  if (
    formEl.name.value.trim() &&
    formEl.tel.value.trim() &&
    formEl.mail.value.trim() &&
    formEl.policy.checked
  ) {
    ennabledSubmitButton();
  } else {
    disabledSubmitButton();
  }
}

function disabledSubmitButton() {
  submitBtnEl.setAttribute('disabled', 'disabled');
  submitBtnEl.classList.add('disabled');
}

function ennabledSubmitButton() {
  submitBtnEl.removeAttribute('disabled');
  submitBtnEl.classList.remove('disabled');
}

$('[name="tel"]').mask('+380 (99) 999 - 99 - 99');
