import data from './data/data.json';
import { renderList } from './js/renderList';

const list = document.querySelector('.product-list');

const quantities = {};

renderList(data);

list.addEventListener('click', onBtn);

function onBtn(event) {
  const target = event.target;

  if (target.closest('.product-list__button')) {
    const button = target.closest('.product-list__button');
    const cardId = button.dataset.id;

    if (!quantities[cardId]) {
      quantities[cardId] = 1;
    }

    button.classList.add('selected');
    button.innerHTML = ` 
      <button
        class="product__button product__button--decrement"
        aria-label="Decrease quantity"
        data-id=${cardId}
      >
        <span class="btn__icon">-</span>
      </button>
      <span class="product__quantity" data-id=${cardId}>${quantities[cardId]}</span>
      <button
        class="product__button product__button--increment"
        aria-label="Increase quantity"
        data-id=${cardId}
      >
        <span class="btn__icon">+</span>
      </button>
    `;

    const decrement = button.querySelector('.product__button--decrement');
    const increment = button.querySelector('.product__button--increment');
    const quantityDisplay = button.querySelector('.product__quantity');

    decrement.addEventListener('click', () => {
      if (quantities[cardId] > 0) {
        quantities[cardId] -= 1;
        quantityDisplay.textContent = quantities[cardId];
        renderTotalOrder(cardId, quantities[cardId]);
      }
    });

    increment.addEventListener('click', () => {
      quantities[cardId] += 1;
      quantityDisplay.textContent = quantities[cardId];
      renderTotalOrder(cardId, quantities[cardId]);
    });
    renderTotalOrder(cardId, quantities[cardId]);
  }
}

const orders = [];

function renderTotalOrder(id, quantity) {
  const cartList = document.querySelector('.cart__list');
  const cartQuantity = document.querySelector('.cart__title');
  const emptyContainer = document.querySelector('.cart__container--empty');

  const order = {
    id: id,
    name: data[id].name,
    quantity: quantity,
    price: data[id].price,
    totalPrice: quantity * data[id].price,
  };
  console.log(order);

  const existingOrderIndex = orders.findIndex(o => o.id === id);

  if (existingOrderIndex !== -1) {
    orders[existingOrderIndex].quantity = quantity;
    orders[existingOrderIndex].totalPrice = order.quantity * order.price;
  } else {
    orders.push(order);
  }

  const totalQuantity = orders.reduce((acc, item) => (acc += item.quantity), 0);

  cartQuantity.textContent = `Your Cart (${totalQuantity})`;

  const markupCart = orders
    .map(order => {
      return `
      <p>${order.name}</p>`;
    })
    .join('');

  emptyContainer.innerHTML = '';
  cartList.innerHTML = markupCart;
}
