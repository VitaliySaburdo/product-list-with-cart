export function renderOrderList(orders) {
  return orders
    .map(order => {
      return `
          <li class="cart__item" data-id=${order.id}>
            <div class="cart__item--container">
              <p class="cart__item--name">${order.name}</p>
              <div class="cart__item--information">
                <p class="cart__item--quantity">${order.quantity}x</p>
                <p class="cart__item--price">@$${order.price.toFixed(2)}</p>
                <p class="cart__item--total-price">$${order.totalPrice.toFixed(2)}</p>
              </div>
            </div>
              <button class="cart__item--close-btn" data-id=${order.id}>
              <svg class="cart__item--close" width="10" height="10">
                <use href="assets/images/sprite.svg#icon-icon-remove-item"></use>
              </svg>
            </button>
          </li>
      `;
    })
    .join('');
}
