import data from './data/data.json';

const list = document.querySelector('.product-list');
// const btn = document.querySelector('.product-list__button');

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
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  event.target.classList.add('selected');
  console.log(event.target);
}
