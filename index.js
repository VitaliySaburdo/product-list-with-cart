import './src/sass/index.scss';
import data from './src/data/data.json';
import { renderProductList } from './src/js/renderProductList';
import { addOrderInCartList, orders } from './src/js/renderTotalOrder';
import { openModal } from './src/js/modalWindowConfirmOrder';

const list = document.querySelector('.product-list');

export const quantities = {};

renderProductList(data);

list.addEventListener('click', onAddToCartBtn);

export function onAddToCartBtn(event) {
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
      console.log('click');
      quantities[cardId] += 1;
      quantityDisplay.textContent = quantities[cardId];
      addOrderInCartList(cardId, quantities[cardId]);
    });
    addOrderInCartList(cardId, quantities[cardId]);
    openModal(orders);
  }
}

function reRenderAddToCartBtn(cardId, quantities) {
  return ` 
      <button
        class="product__button product__button--decrement"
        aria-label="Decrease quantity"
        data-id=${cardId}
      >
        <svg width="10" height="10">
            <use href="assets/images/sprite.svg#icon-icon-decrement-quantity"></use>
        </svg>
      </button>
      <span class="product__quantity" data-id=${cardId}>${quantities[cardId]}</span>
      <button
        class="product__button product__button--increment"
        aria-label="Increase quantity"
        data-id=${cardId}
      >
        <svg width="10" height="10" >
            <use href="assets/images/sprite.svg#icon-icon-increment-quantity"></use>
        </svg>
      </button>
    `;
}
