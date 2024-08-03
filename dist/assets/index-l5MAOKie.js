(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();const d=[{image:{thumbnail:"assets/images/image-waffle-thumbnail.jpg",mobile:"assets/images/image-waffle-mobile.jpg",tablet:"assets/images/image-waffle-tablet.jpg",desktop:"assets/images/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{image:{thumbnail:"assets/images/image-creme-brulee-thumbnail.jpg",mobile:"assets/images/image-creme-brulee-mobile.jpg",tablet:"assets/images/image-creme-brulee-tablet.jpg",desktop:"assets/images/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{image:{thumbnail:"assets/images/image-macaron-thumbnail.jpg",mobile:"assets/images/image-macaron-mobile.jpg",tablet:"assets/images/image-macaron-tablet.jpg",desktop:"assets/images/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{image:{thumbnail:"assets/images/image-tiramisu-thumbnail.jpg",mobile:"assets/images/image-tiramisu-mobile.jpg",tablet:"assets/images/image-tiramisu-tablet.jpg",desktop:"assets/images/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{image:{thumbnail:"assets/images/image-baklava-thumbnail.jpg",mobile:"assets/images/image-baklava-mobile.jpg",tablet:"assets/images/image-baklava-tablet.jpg",desktop:"assets/images/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{image:{thumbnail:"assets/images/image-meringue-thumbnail.jpg",mobile:"assets/images/image-meringue-mobile.jpg",tablet:"assets/images/image-meringue-tablet.jpg",desktop:"assets/images/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{image:{thumbnail:"assets/images/image-cake-thumbnail.jpg",mobile:"assets/images/image-cake-mobile.jpg",tablet:"assets/images/image-cake-tablet.jpg",desktop:"assets/images/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{image:{thumbnail:"assets/images/image-brownie-thumbnail.jpg",mobile:"assets/images/image-brownie-mobile.jpg",tablet:"assets/images/image-brownie-tablet.jpg",desktop:"assets/images/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{image:{thumbnail:"assets/images/image-panna-cotta-thumbnail.jpg",mobile:"assets/images/image-panna-cotta-mobile.jpg",tablet:"assets/images/image-panna-cotta-tablet.jpg",desktop:"assets/images/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}],L=document.querySelector(".product-list");function f(i){const a=i.map((e,t)=>`
      <li class="product-list__item" id=${t}>
      <div class="product-list__image--container" data-id=${t}>
        <img
          class="product-list__image"
          srcset="
            ${e.image.desktop} 250w,
            ${e.image.mobile} 325w
          "
          sizes="
            (min-width: 1440px) 250px,
            100vw"
          src=${e.image.mobile}
          alt="${e.name}"
          width="250"
          height="210"
        />
        </div>
        <button class="product-list__button" data-id=${t}>
          <svg width="18" height="18">
            <use href="../assets/images/sprite.svg#icon-icon-add-to-cart"></use>
          </svg>
          Add to Cart
        </button>
        <p class="product-list__category">${e.category}</p>
        <p class="product-list__name">${e.name}</p>
        <p class="product-list__price">$${e.price.toFixed(2)}</p>
      </li>`).join("");L.innerHTML=a}function h(i){return`
        <div class="cart__total-price--container">
          <p class="cart__total-price--title">Order Total</p>
          <p class="cart__total-price--text">$${i.toFixed(2)}</p>
        </div>
        <div class="cart__delivery">
          <svg width="18" height="18">
            <use href="../assets/images/sprite.svg#icon-icon-carbon-neutral"></use>
          </svg>
          <p class="cart__delivery--text">This is a <b>carbon-neutral</b> delivery</p>
        </div>
        <button class="cart__total--btn btn">Confirm Order</button>
  `}function y(i){return i.map(a=>`
          <li class="cart__item" data-id=${a.id}>
            <div class="cart__item--container">
              <p class="cart__item--name">${a.name}</p>
              <div class="cart__item--information">
                <p class="cart__item--quantity">${a.quantity}x</p>
                <p class="cart__item--price">@$${a.price.toFixed(2)}</p>
                <p class="cart__item--total-price">$${a.totalPrice.toFixed(2)}</p>
              </div>
            </div>
              <button class="cart__item--close-btn" data-id=${a.id}>
              <svg class="cart__item--close" width="10" height="10">
                <use href="assets/images/sprite.svg#icon-icon-remove-item"></use>
              </svg>
            </button>
          </li>
      `).join("")}function w(i){const a=i.reduce((e,t)=>e+=t.totalPrice,0);return`
  <svg width="40" height="40" class="modal__icon">
      <use href="../assets/images/sprite.svg#icon-icon-order-confirmed"></use>
    </svg>
    <h2 class="modal__title">Order confirmed</h2>
    <p class="modal__txt">We hope you enjoy your food</p>
    <div class="modal__container">
      <ul class="modal__list">
        ${i.map(e=>`
          <li class="modal__item">
          <img
            class="modal__img"
            src=${d[e.id].image.thumbnail}
            alt=${e.name}
            width="50"
            height="50"
          />
          <div class="modal__item--container">
            <div class="modal__item--box">
              <p class="modal__item--name">${e.name}</p>
              <div class="modal__item--total-container">
                <p class="modal__item--quantity">${e.quantity}x</p>
                <p class="modal__item--price">@${e.price.toFixed(2)}</p>
              </div>
            </div>
            <p class="modal__item--total-price">$${e.totalPrice.toFixed(2)}</p>
          </div>
        </li>
          `)}
      </ul>
      <div class="modal__total--container">
        <p class="modal__item--total-txt">Order total</p>
        <p class="modal__item--total-order">${a.toFixed(2)}</p>
      </div>
    </div>
    <button class="modal__btn btn">Start new order</button>
  `}const j=document.querySelector(".product-list"),q=document.querySelector(".cart__list"),C=document.querySelector(".cart__total-price"),x=document.querySelector(".cart__container--empty"),S=document.querySelector(".cart__title");function M(i){document.querySelector(".modal__btn").addEventListener("click",e);function e(){i(),j.innerHTML="",f(d),q.innerHTML="",C.innerHTML="",x.innerHTML=`
          <svg width="120" height="120" class="cart__image">
            <use href="../assets/images/sprite.svg#icon-illustration-empty-cart"></use>
          </svg>
          `,S.textContent="Your Cart (0)",o.length=0;for(let t in c)c[t]=1}}function v(i){const a=document.querySelector(".cart__total--btn"),e=document.querySelector(".modal__backdrop"),t=document.querySelector(".modal__window");a.addEventListener("click",s),e.addEventListener("click",r);function s(){e.classList.remove("is-hidden"),window.addEventListener("keydown",l),t.innerHTML=w(i),M(n)}function n(){e.classList.add("is-hidden"),window.removeEventListener("keydown",l)}function r(m){m.currentTarget===m.target&&n()}function l(m){m.code==="Escape"&&n()}}const _=document.querySelector(".cart__list"),b=document.querySelector(".cart__total-price"),$=document.querySelector(".cart__container--empty"),u=document.querySelector(".cart__title"),o=[];function p(i,a){const e={id:i,name:d[i].name,quantity:a,price:d[i].price,totalPrice:a*d[i].price},t=o.findIndex(r=>r.id===i);t!==-1?(o[t].quantity=a,o[t].totalPrice=e.quantity*e.price):o.push(e);const s=o.reduce((r,l)=>r+=l.quantity,0);u.textContent=`Your Cart (${s})`,u.style.marginBottom="35px";const n=o.reduce((r,l)=>r+=l.totalPrice,0);$.innerHTML="",_.innerHTML=y(o),b.innerHTML=h(n),k()}function k(){document.querySelectorAll(".cart__item--close-btn").forEach(a=>{a.addEventListener("click",()=>{const e=a.dataset.id,t=o.findIndex(s=>s.id==e);if(t!==-1){o.splice(t,1),_.innerHTML=y(o);const s=o.reduce((m,g)=>m+=g.totalPrice,0);b.innerHTML=h(s);const n=document.querySelector(`.product-list__button[data-id="${e}"]`);n.classList.remove("selected"),document.querySelector(`.product-list__image--container[data-id="${e}"]`).classList.remove("selected");const l=o.reduce((m,g)=>m+=g.quantity,0);if(u.textContent=`Your Cart (${l})`,c[e]=1,n&&(n.innerHTML=`
          <svg width="18" height="18">
            <use href="../assets/images/sprite.svg#icon-icon-add-to-cart"></use>
          </svg>
          Add to Cart
          `),o.length===0){_.innerHTML="",b.innerHTML="",$.innerHTML=`
          <svg width="120" height="120" class="cart__image">
            <use href="../assets/images/sprite.svg#icon-illustration-empty-cart"></use>
          </svg>
          `,u.textContent="Your Cart (0)";return}k(),v(o)}})})}function T(i,a){return` 
      <button
        class="product__button product__button--decrement"
        aria-label="Decrease quantity"
        data-id=${i}
      >
        <svg width="10" height="10">
            <use href="assets/images/sprite.svg#icon-icon-decrement-quantity"></use>
        </svg>
      </button>
      <span class="product__quantity" data-id=${i}>${a[i]}</span>
      <button
        class="product__button product__button--increment"
        aria-label="Increase quantity"
        data-id=${i}
      >
        <svg width="10" height="10" >
            <use href="assets/images/sprite.svg#icon-icon-increment-quantity"></use>
        </svg>
      </button>
    `}const c={};function O(i){const a=i.target;if(a.closest(".product-list__button")){const e=a.closest(".product-list__button"),t=e.dataset.id;c[t]||(c[t]=1);const s=document.querySelector(`.product-list__image--container[data-id="${t}"]`);e.classList.add("selected"),s.classList.add("selected"),e.innerHTML=T(t,c);const n=e.querySelector(".product__button--decrement"),r=e.querySelector(".product__button--increment"),l=e.querySelector(".product__quantity");n.addEventListener("click",()=>{c[t]>0&&(c[t]-=1,l.textContent=c[t],p(t,c[t]))}),r.addEventListener("click",()=>{c[t]+=1,l.textContent=c[t],p(t,c[t])}),p(t,c[t]),v(o)}}const P=document.querySelector(".product-list");f(d);P.addEventListener("click",O);
