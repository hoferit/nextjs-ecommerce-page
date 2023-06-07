const cartItems = [
  { id: 1, quantity: 1, price: 40 },
  { id: 2, quantity: 1, price: 50 },
  { id: 3, quantity: 1, price: 30 },
];
export function cartSum() {
  const total = cartItems
    .map((cartItem) => {
      return cartItem.quantity * cartItem.price;
    })
    .reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);
  return total;
}
