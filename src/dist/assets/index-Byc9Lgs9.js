(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function m(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=m(t);fetch(t.href,a)}})();const g=[{image:{thumbnail:"./assets/images/thumbnail/image-waffle-thumbnail.jpg",mobile:"./assets/images/mobile/image-waffle-mobile.jpg",tablet:"./assets/images/tablet/image-waffle-tablet.jpg",desktop:"./assets/images/desk/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{image:{thumbnail:"./assets/images/thumbnail/image-creme-brulee-thumbnail.jpg",mobile:"./assets/images/mobile/image-creme-brulee-mobile.jpg",tablet:"./assets/images/tablet/image-creme-brulee-tablet.jpg",desktop:"./assets/images/desk/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{image:{thumbnail:"./assets/images/thumbnail/image-macaron-thumbnail.jpg",mobile:"./assets/images/mobile/image-macaron-mobile.jpg",tablet:"./assets/images/tablet/image-macaron-tablet.jpg",desktop:"./assets/images/desk/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{image:{thumbnail:"./assets/images/thumbnail/image-tiramisu-thumbnail.jpg",mobile:"./assets/images/mobile/image-tiramisu-mobile.jpg",tablet:"./assets/images/tablet/image-tiramisu-tablet.jpg",desktop:"./assets/images/desk/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{image:{thumbnail:"./assets/images/thumbnail/image-baklava-thumbnail.jpg",mobile:"./assets/images/mobile/image-baklava-mobile.jpg",tablet:"./assets/images/tablet/image-baklava-tablet.jpg",desktop:"./assets/images/desk/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{image:{thumbnail:"./assets/images/thumbnail/image-meringue-thumbnail.jpg",mobile:"./assets/images/mobile/image-meringue-mobile.jpg",tablet:"./assets/images/tablet/image-meringue-tablet.jpg",desktop:"./assets/images/desk/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{image:{thumbnail:"./assets/images/thumbnail/image-cake-thumbnail.jpg",mobile:"./assets/images/mobile/image-cake-mobile.jpg",tablet:"./assets/images/tablet/image-cake-tablet.jpg",desktop:"./assets/images/desk/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{image:{thumbnail:"./assets/images/thumbnail/image-brownie-thumbnail.jpg",mobile:"./assets/images/mobile/image-brownie-mobile.jpg",tablet:"./assets/images/tablet/image-brownie-tablet.jpg",desktop:"./assets/images/desk/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{image:{thumbnail:"./assets/images/thumbnail/image-panna-cotta-thumbnail.jpg",mobile:"./assets/images/mobile/image-panna-cotta-mobile.jpg",tablet:"./assets/images/tablet/image-panna-cotta-tablet.jpg",desktop:"./assets/images/desk/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}];document.querySelector(".product-list");const l=[];function u(r,n){const m=document.querySelector(".cart__list"),e=document.querySelector(".cart__title"),t=document.querySelector(".cart__container--empty");document.querySelector(".cart__total-price--container");const a={id:r,name:g[r].name,quantity:n,price:g[r].price,totalPrice:n*g[r].price},o=l.findIndex(i=>i.id===r);o!==-1?(l[o].quantity=n,l[o].totalPrice=a.quantity*a.price):l.push(a);const p=l.reduce((i,c)=>i+=c.quantity,0);e.textContent=`Your Cart (${p})`,e.style.marginBottom="35px",l.reduce((i,c)=>i+=c.totalPrice,0);const b=l.map(i=>`
          <li class="cart__item" data-id=${i.id}>
            <div class="cart__item--container">
              <p class="cart__item--name">${i.name}</p>
              <div class="cart__item--information">
                <p class="cart__item--quantity">${i.quantity}x</p>
                <p class="cart__item--price">@$${i.price.toFixed(2)}</p>
                <p class="cart__item--total-price">$${i.totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <button class="cart__item--close-btn">X</button>
          </li>
      `).join("");t.innerHTML="",m.innerHTML=b}const d=document.querySelector(".product-list"),s={};d.addEventListener("click",_);function _(r){const n=r.target;if(n.closest(".product-list__button")){const m=n.closest(".product-list__button"),e=m.dataset.id;s[e]||(s[e]=1),m.classList.add("selected"),m.innerHTML=` 
      <button
        class="product__button product__button--decrement"
        aria-label="Decrease quantity"
        data-id=${e}
      >
        <svg width="18" height="18" class="cart__image">
            <use href="../assets/images/sprite.svg#icon-icon-carbon-neutral"></use>
        </svg>
      </button>
      <span class="product__quantity" data-id=${e}>${s[e]}</span>
      <button
        class="product__button product__button--increment"
        aria-label="Increase quantity"
        data-id=${e}
      >
        <span class="btn__icon">+</span>
      </button>
    `;const t=m.querySelector(".product__button--decrement"),a=m.querySelector(".product__button--increment"),o=m.querySelector(".product__quantity");t.addEventListener("click",()=>{s[e]>0&&(s[e]-=1,o.textContent=s[e],u(e,s[e]))}),a.addEventListener("click",()=>{s[e]+=1,o.textContent=s[e],u(e,s[e])}),u(e,s[e])}}
