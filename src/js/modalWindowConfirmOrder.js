import { markupModalConfirmOrder } from './markupModalConfirmOrder';
import { newOrderHandler } from './newOrderHandler';

export function modalWindowConfirm(orders) {
  const confirmOrderBtn = document.querySelector('.cart__total--btn');
  const backdrop = document.querySelector('.modal__backdrop');
  const modalContainer = document.querySelector('.modal__window');

  confirmOrderBtn.addEventListener('click', onOpenModal);
  backdrop.addEventListener('click', onBackdropClick);

  function onOpenModal() {
    backdrop.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscPressKey);
    modalContainer.innerHTML = markupModalConfirmOrder(orders);
    newOrderHandler(onCloseModal);
  }

  function onCloseModal() {
    backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscPressKey);
  }

  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  }

  function onEscPressKey(evt) {
    if (evt.code === 'Escape') {
      onCloseModal();
    }
  }
}
