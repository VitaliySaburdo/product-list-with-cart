import './src/sass/index.scss';
import data from './src/data/data.json';
import { renderProductList } from './src/js/renderProductList';
import { onAddToCartBtnHandler } from './src/js/onAddToCartBtnHandler';

const list = document.querySelector('.product-list');

renderProductList(data);

list.addEventListener('click', onAddToCartBtnHandler);
