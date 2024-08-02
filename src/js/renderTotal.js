export function renderTotal(total) {
  return `
        <div class="cart__total-price--container">
          <p class="cart__total-price--title">Order Total</p>
          <p class="cart__total-price--text">$${total}</p>
        </div>
        <div class="cart__delivery">
          <svg width="18" height="18">
            <use href="../assets/images/sprite.svg#icon-icon-carbon-neutral"></use>
          </svg>
          <p class="cart__delivery--text">This is a <b>carbon-neutral</b> delivery</p>
        </div>
        <button class="cart__total--btn btn">Confirm Order</button>
  `;
}
