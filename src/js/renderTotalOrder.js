import data from '../data/data.json';
import { renderTotal } from './renderTotal';
import { renderOrderList } from './renderOrderList';

const cartList = document.querySelector('.cart__list');
const totalContainer = document.querySelector('.cart__total-price');

const orders = [];

export function renderTotalOrder(id, quantity) {
  const cartQuantity = document.querySelector('.cart__title');
  const emptyContainer = document.querySelector('.cart__container--empty');

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
        removeOrder();
      }
    });
  });
}
