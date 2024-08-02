import data from '../data/data.json';

export function markupModalConfirmOrder(orders) {
  console.log(orders);
  const totalPrice = orders.reduce((acc, item) => (acc += item.totalPrice), 0);
  return `
  <svg width="40" height="40" class="modal__icon">
      <use href="../assets/images/sprite.svg#icon-icon-order-confirmed"></use>
    </svg>
    <h2 class="modal__title">Order confirmed</h2>
    <p class="modal__txt">We hope you enjoy your food</p>
    <div class="modal__container">
      <ul class="modal__list">
        ${orders.map(order => {
          return `
          <li class="modal__item">
          <img
            class="modal__img"
            src=${data[order.id].image.thumbnail}
            alt="waffle"
            width="50"
            height="50"
          />
          <div class="modal__item--container">
            <div class="modal__item--box">
              <p class="modal__item--name">${order.name}</p>
              <div class="modal__item--total-container">
                <p class="modal__item--quantity">${order.quantity}x</p>
                <p class="modal__item--price">@${order.price}</p>
              </div>
            </div>
            <p class="modal__item--total-price">${order.totalPrice}</p>
          </div>
        </li>
          `;
        })}
      </ul>
      <div class="modal__total--container">
        <p class="modal__item--total-txt">Order total</p>
        <p class="modal__item--total-order">${totalPrice}</p>
      </div>
    </div>
    <button class="btn">Start new order</button>
  `;
}
