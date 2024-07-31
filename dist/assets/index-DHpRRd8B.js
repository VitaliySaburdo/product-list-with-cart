(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&e(m)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const l=[{image:{thumbnail:"assets/images/image-waffle-thumbnail.jpg",mobile:"assets/images/image-waffle-mobile.jpg",tablet:"assets/images/image-waffle-tablet.jpg",desktop:"assets/images/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{image:{thumbnail:"assets/images/image-creme-brulee-thumbnail.jpg",mobile:"assets/images/image-creme-brulee-mobile.jpg",tablet:"assets/images/image-creme-brulee-tablet.jpg",desktop:"assets/images/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{image:{thumbnail:"assets/images/image-macaron-thumbnail.jpg",mobile:"assets/images/image-macaron-mobile.jpg",tablet:"assets/images/image-macaron-tablet.jpg",desktop:"assets/images/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{image:{thumbnail:"assets/images/image-tiramisu-thumbnail.jpg",mobile:"assets/images/image-tiramisu-mobile.jpg",tablet:"assets/images/image-tiramisu-tablet.jpg",desktop:"assets/images/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{image:{thumbnail:"assets/images/image-baklava-thumbnail.jpg",mobile:"assets/images/image-baklava-mobile.jpg",tablet:"assets/images/image-baklava-tablet.jpg",desktop:"assets/images/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{image:{thumbnail:"assets/images/image-meringue-thumbnail.jpg",mobile:"assets/images/image-meringue-mobile.jpg",tablet:"assets/images/image-meringue-tablet.jpg",desktop:"assets/images/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{image:{thumbnail:"assets/images/image-cake-thumbnail.jpg",mobile:"assets/images/image-cake-mobile.jpg",tablet:"assets/images/image-cake-tablet.jpg",desktop:"assets/images/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{image:{thumbnail:"assets/images/image-brownie-thumbnail.jpg",mobile:"assets/images/image-brownie-mobile.jpg",tablet:"assets/images/image-brownie-tablet.jpg",desktop:"assets/images/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{image:{thumbnail:"assets/images/image-panna-cotta-thumbnail.jpg",mobile:"assets/images/image-panna-cotta-mobile.jpg",tablet:"assets/images/image-panna-cotta-tablet.jpg",desktop:"assets/images/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}],b=document.querySelector(".product-list");function _(r){const i=r.map((a,e)=>`
      <li class="product-list__item" id=${e}>
        <img
          class="product-list__image"
          srcset="
            ${a.image.desktop} 250w,
            ${a.image.mobile} 325w
          "
          sizes="
            (min-width: 1440px) 250px,
            100vw"
          src=${a.image.mobile}
          alt="${a.name}"
          width="250"
          height="210"
        />
        <button class="product-list__button" data-id=${e}>
          <svg width="18" height="18">
            <use href="../assets/images/sprite.svg#icon-icon-add-to-cart"></use>
          </svg>
          Add to Cart
        </button>
        <p class="product-list__category">${a.category}</p>
        <p class="product-list__name">${a.name}</p>
        <p class="product-list__price">$${a.price.toFixed(2)}</p>
      </li>`).join("");b.innerHTML=i}const c=[];function p(r,i){const a=document.querySelector(".cart__list"),e=document.querySelector(".cart__title"),t=document.querySelector(".cart__container--empty");document.querySelector(".cart__total-price--container");const s={id:r,name:l[r].name,quantity:i,price:l[r].price,totalPrice:i*l[r].price},m=c.findIndex(n=>n.id===r);m!==-1?(c[m].quantity=i,c[m].totalPrice=s.quantity*s.price):c.push(s);const u=c.reduce((n,g)=>n+=g.quantity,0);e.textContent=`Your Cart (${u})`,e.style.marginBottom="35px",c.reduce((n,g)=>n+=g.totalPrice,0);const d=c.map(n=>`
          <li class="cart__item" data-id=${n.id}>
            <div class="cart__item--container">
              <p class="cart__item--name">${n.name}</p>
              <div class="cart__item--information">
                <p class="cart__item--quantity">${n.quantity}x</p>
                <p class="cart__item--price">@$${n.price.toFixed(2)}</p>
                <p class="cart__item--total-price">$${n.totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <button class="cart__item--close-btn">X</button>
          </li>
      `).join("");t.innerHTML="",a.innerHTML=d}const f=document.querySelector(".product-list"),o={};_(l);f.addEventListener("click",y);function y(r){const i=r.target;if(i.closest(".product-list__button")){const a=i.closest(".product-list__button"),e=a.dataset.id;o[e]||(o[e]=1),a.classList.add("selected"),a.innerHTML=` 
      <button
        class="product__button product__button--decrement"
        aria-label="Decrease quantity"
        data-id=${e}
      >
        <svg width="18" height="18" class="cart__image">
            <use href="../assets/images/sprite.svg#icon-icon-carbon-neutral"></use>
        </svg>
      </button>
      <span class="product__quantity" data-id=${e}>${o[e]}</span>
      <button
        class="product__button product__button--increment"
        aria-label="Increase quantity"
        data-id=${e}
      >
        <span class="btn__icon">+</span>
      </button>
    `;const t=a.querySelector(".product__button--decrement"),s=a.querySelector(".product__button--increment"),m=a.querySelector(".product__quantity");t.addEventListener("click",()=>{o[e]>0&&(o[e]-=1,m.textContent=o[e],p(e,o[e]))}),s.addEventListener("click",()=>{o[e]+=1,m.textContent=o[e],p(e,o[e])}),p(e,o[e])}}
