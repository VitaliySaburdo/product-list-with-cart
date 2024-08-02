export function openModal(orders) {
  const confirmOrderBtn = document.querySelector('.cart__total--btn');

  if (confirmOrderBtn) {
    confirmOrderBtn.addEventListener('click', () => {
      console.log('orders:', orders);
    });
  }
}
