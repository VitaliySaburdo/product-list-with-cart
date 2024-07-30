import data from './data/data.json';

const list = document.querySelector('.product-list');

renderList(data);

function renderList(cards) {
  const markup = cards
    .map((card, idx) => {
      return `
      <li class="product-list__item"  id=${idx}>
        <img
          class="product-list__image"
                        srcset="
              ${card.image.desktop} 250w,
              ${card.image.mobile} 325w
              "
              sizes="
                (min-width: 1440px) 250px,
                100vw"
          src=${card.image.mobile}
          alt=${card.name}
              width="250"
              height="210"
        />
        <button class="product-list__button" data-id=${idx}>
          <svg width="18" height="18">
            <use href="../assets/images/sprite.svg#icon-icon-add-to-cart"></use>
          </svg>
          Add to Cart
        </button>
        <p class="product-list__category">${card.category}</p>
        <p class="product-list__name">${card.name}</p>
        <p class="product-list__price">$${card.price.toFixed(2)}</p>
      </li>`;
    })
    .join('');

  list.innerHTML = markup;
}

list.addEventListener('click', onBtn);

function onBtn(event) {
  const target = event.target;
  let quantity = 0;

  if (target.closest('.product-list__button')) {
    const button = target.closest('.product-list__button');
    button.classList.add('selected');
    button.innerHTML = ` 
              <button
                class="product__button product__button--decrement"
                aria-label="Decrease quantity"
              >
                <span class="btn__icon">-</span>
              </button>
              <span class="product__quantity">${quantity}</span>
              <button
                class="product__button product__button--increment"
                aria-label="Increase quantity"
              >
                <span class="btn__icon">+</span>
              </button>
    `;

    const decrement = document.querySelector('.product__button--decrement');
    const increment = document.querySelector('.product__button--increment');
    const quantityDisplay = button.querySelector('.product__quantity');

    decrement.addEventListener('click', () => {
      quantity -= 1;
      quantityDisplay.textContent = quantity;
    });
    increment.addEventListener('click', () => {
      quantity += 1;
      quantityDisplay.textContent = quantity;
    });
    console.log(quantity);
  }
}
