import data from '../data/data.json';
import { renderTotal } from './renderTotal';
import { renderOrderList } from './renderOrderList';

const cartList = document.querySelector('.cart__list');
const totalContainer = document.querySelector('.cart__total-price');
const emptyContainer = document.querySelector('.cart__container--empty');
const cartQuantity = document.querySelector('.cart__title');

const orders = [];

export function renderTotalOrder(id, quantity) {
  const order = {
    id: id,
    name: data[id].name,
    quantity: quantity,
    price: data[id].price,
    totalPrice: quantity * data[id].price,
  };

  const existingOrderIndex = orders.findIndex(o => o.id === id);

  if (existingOrderIndex !== -1) {
    orders[existingOrderIndex].quantity = quantity;
    orders[existingOrderIndex].totalPrice = order.quantity * order.price;
  } else {
    orders.push(order);
  }

  const totalQuantity = orders.reduce((acc, item) => (acc += item.quantity), 0);

  cartQuantity.textContent = `Your Cart (${totalQuantity})`;
  cartQuantity.style.marginBottom = '35px';

  const totalPrice = orders.reduce((acc, item) => (acc += item.totalPrice), 0);

  emptyContainer.innerHTML = '';
  cartList.innerHTML = renderOrderList(orders);
  totalContainer.innerHTML = renderTotal(totalPrice);
  removeOrder();
}

export function removeOrder() {
  const removeBtns = document.querySelectorAll('.cart__item--close-btn');
  removeBtns.forEach(button => {
    button.addEventListener('click', () => {
      const cardId = button.dataset.id;
      const orderIndex = orders.findIndex(order => order.id == cardId);
      if (orderIndex !== -1) {
        orders.splice(orderIndex, 1);
        cartList.innerHTML = renderOrderList(orders);
        const totalPrice = orders.reduce((acc, item) => (acc += item.totalPrice), 0);
        totalContainer.innerHTML = renderTotal(totalPrice);
        const productButton = document.querySelector(`.product-list__button[data-id="${cardId}"]`);
        productButton.classList.remove('selected');
        if (productButton) {
          productButton.innerHTML = `
          <svg width="18" height="18">
            <use href="../assets/images/sprite.svg#icon-icon-add-to-cart"></use>
          </svg>
          Add to Cart
          `;
        }
        if (orders.length === 0) {
          console.log('true');
          cartList.innerHTML = '';
          totalContainer.innerHTML = '';
          emptyContainer.innerHTML = `
          <svg width="120" height="120" class="cart__image">
            <use href="../assets/images/sprite.svg#icon-illustration-empty-cart"></use>
          </svg>
          `;
          cartQuantity.textContent = `Your Cart (${0})`;
          return;
        }
        removeOrder();
      }
    });
  });
}
