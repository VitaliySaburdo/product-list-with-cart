import { addOrderInCartList, orders } from './orderListHandler';
import { modalWindowConfirm } from './modalWindowConfirmOrder';
import { reRenderAddToCartBtn } from './reRenderAddToCartBtn';

const quantities = {};

export function onAddToCartBtnHandler(event) {
  const target = event.target;

  if (target.closest('.product-list__button')) {
    const button = target.closest('.product-list__button');
    const cardId = button.dataset.id;

    if (!quantities[cardId]) {
      quantities[cardId] = 1;
    }

    const imageContainer = document.querySelector(
      `.product-list__image--container[data-id="${cardId}"]`
    );

    button.classList.add('selected');
    imageContainer.classList.add('selected');

    button.innerHTML = reRenderAddToCartBtn(cardId, quantities);

    const decrement = button.querySelector('.product__button--decrement');
    const increment = button.querySelector('.product__button--increment');
    const quantityDisplay = button.querySelector('.product__quantity');

    decrement.addEventListener('click', () => {
      if (quantities[cardId] > 0) {
        quantities[cardId] -= 1;
        quantityDisplay.textContent = quantities[cardId];
        addOrderInCartList(cardId, quantities[cardId]);
      }
    });

    increment.addEventListener('click', () => {
      quantities[cardId] += 1;
      quantityDisplay.textContent = quantities[cardId];
      addOrderInCartList(cardId, quantities[cardId]);
    });

    addOrderInCartList(cardId, quantities[cardId]);
    modalWindowConfirm(orders);
  }
}
