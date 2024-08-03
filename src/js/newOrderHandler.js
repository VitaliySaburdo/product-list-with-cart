import { renderProductList } from './renderProductList';
import data from '../data/data.json';

const list = document.querySelector('.product-list');
const cartList = document.querySelector('.cart__list');
const totalContainer = document.querySelector('.cart__total-price');
const emptyContainer = document.querySelector('.cart__container--empty');
const cartQuantity = document.querySelector('.cart__title');
import { quantities } from './onAddToCartBtnHandler';
import { orders } from './orderListHandler';

export function newOrderHandler(onCloseModal) {
  const addNewOrderBtn = document.querySelector('.modal__btn');
  addNewOrderBtn.addEventListener('click', addNewOrderBtnHandler);

  function addNewOrderBtnHandler() {
    onCloseModal();
    list.innerHTML = '';
    renderProductList(data);
    cartList.innerHTML = '';
    totalContainer.innerHTML = '';
    emptyContainer.innerHTML = `
          <svg width="120" height="120" class="cart__image">
            <use href="../assets/images/sprite.svg#icon-illustration-empty-cart"></use>
          </svg>
          `;
    cartQuantity.textContent = `Your Cart (${0})`;
    orders.length = 0;
    for (let key in quantities) {
      quantities[key] = 1;
    }
  }
}
