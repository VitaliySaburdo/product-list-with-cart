(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const c=[{image:{thumbnail:"./assets/images/thumbnail/image-waffle-thumbnail.jpg",mobile:"./assets/images/mobile/image-waffle-mobile.jpg",tablet:"./assets/images/tablet/image-waffle-tablet.jpg",desktop:"./assets/images/desk/image-waffle-desktop.jpg"},name:"Waffle with Berries",category:"Waffle",price:6.5},{image:{thumbnail:"./assets/images/thumbnail/image-creme-brulee-thumbnail.jpg",mobile:"./assets/images/mobile/image-creme-brulee-mobile.jpg",tablet:"./assets/images/tablet/image-creme-brulee-tablet.jpg",desktop:"./assets/images/desk/image-creme-brulee-desktop.jpg"},name:"Vanilla Bean Crème Brûlée",category:"Crème Brûlée",price:7},{image:{thumbnail:"./assets/images/thumbnail/image-macaron-thumbnail.jpg",mobile:"./assets/images/mobile/image-macaron-mobile.jpg",tablet:"./assets/images/tablet/image-macaron-tablet.jpg",desktop:"./assets/images/desk/image-macaron-desktop.jpg"},name:"Macaron Mix of Five",category:"Macaron",price:8},{image:{thumbnail:"./assets/images/thumbnail/image-tiramisu-thumbnail.jpg",mobile:"./assets/images/mobile/image-tiramisu-mobile.jpg",tablet:"./assets/images/tablet/image-tiramisu-tablet.jpg",desktop:"./assets/images/desk/image-tiramisu-desktop.jpg"},name:"Classic Tiramisu",category:"Tiramisu",price:5.5},{image:{thumbnail:"./assets/images/thumbnail/image-baklava-thumbnail.jpg",mobile:"./assets/images/mobile/image-baklava-mobile.jpg",tablet:"./assets/images/tablet/image-baklava-tablet.jpg",desktop:"./assets/images/desk/image-baklava-desktop.jpg"},name:"Pistachio Baklava",category:"Baklava",price:4},{image:{thumbnail:"./assets/images/thumbnail/image-meringue-thumbnail.jpg",mobile:"./assets/images/mobile/image-meringue-mobile.jpg",tablet:"./assets/images/tablet/image-meringue-tablet.jpg",desktop:"./assets/images/desk/image-meringue-desktop.jpg"},name:"Lemon Meringue Pie",category:"Pie",price:5},{image:{thumbnail:"./assets/images/thumbnail/image-cake-thumbnail.jpg",mobile:"./assets/images/mobile/image-cake-mobile.jpg",tablet:"./assets/images/tablet/image-cake-tablet.jpg",desktop:"./assets/images/desk/image-cake-desktop.jpg"},name:"Red Velvet Cake",category:"Cake",price:4.5},{image:{thumbnail:"./assets/images/thumbnail/image-brownie-thumbnail.jpg",mobile:"./assets/images/mobile/image-brownie-mobile.jpg",tablet:"./assets/images/tablet/image-brownie-tablet.jpg",desktop:"./assets/images/desk/image-brownie-desktop.jpg"},name:"Salted Caramel Brownie",category:"Brownie",price:4.5},{image:{thumbnail:"./assets/images/thumbnail/image-panna-cotta-thumbnail.jpg",mobile:"./assets/images/mobile/image-panna-cotta-mobile.jpg",tablet:"./assets/images/tablet/image-panna-cotta-tablet.jpg",desktop:"./assets/images/desk/image-panna-cotta-desktop.jpg"},name:"Vanilla Panna Cotta",category:"Panna Cotta",price:6.5}],d=document.querySelector(".product-list");function _(m){const s=m.map((a,e)=>`
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
      </li>`).join("");d.innerHTML=s}const l=[];function u(m,s){const a=document.querySelector(".cart__list"),e=document.querySelector(".cart__title"),t=document.querySelector(".cart__container--empty");document.querySelector(".cart__total-price--container");const i={id:m,name:c[m].name,quantity:s,price:c[m].price,totalPrice:s*c[m].price},r=l.findIndex(n=>n.id===m);r!==-1?(l[r].quantity=s,l[r].totalPrice=i.quantity*i.price):l.push(i);const p=l.reduce((n,g)=>n+=g.quantity,0);e.textContent=`Your Cart (${p})`,e.style.marginBottom="35px",l.reduce((n,g)=>n+=g.totalPrice,0);const b=l.map(n=>`
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
      `).join("");t.innerHTML="",a.innerHTML=b}const f=document.querySelector(".product-list"),o={};_(c);f.addEventListener("click",h);function h(m){const s=m.target;if(s.closest(".product-list__button")){const a=s.closest(".product-list__button"),e=a.dataset.id;o[e]||(o[e]=1),a.classList.add("selected"),a.innerHTML=` 
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
    `;const t=a.querySelector(".product__button--decrement"),i=a.querySelector(".product__button--increment"),r=a.querySelector(".product__quantity");t.addEventListener("click",()=>{o[e]>0&&(o[e]-=1,r.textContent=o[e],u(e,o[e]))}),i.addEventListener("click",()=>{o[e]+=1,r.textContent=o[e],u(e,o[e])}),u(e,o[e])}}
