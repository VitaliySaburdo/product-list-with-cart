export function reRenderAddToCartBtn(cardId, quantities) {
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
