import data from './data/data.json';

const list = document.querySelector('.product-list');

renderList(data);

function renderList(cards) {
  const markup = cards
    .map((card, idx) => {
      return ` 
      <li class="product-list__item"  id=${idx + 1}>
        <img
          class="product-list__image"
          src=${card.image.mobile}
          alt=${card.name}
        />
        <button class="product-list__button" data=${idx + 1}>
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
