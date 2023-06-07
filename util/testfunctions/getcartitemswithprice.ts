const itemsFromDb = [
  { id: 1, name: 'Millie', type: 'Alpaca', price: 30 },
  { id: 2, name: 'Petey', type: 'Bunny', price: 50 },
  { id: 3, name: 'Selma', type: 'Cow', price: 45 },
];
const cartItems = [
  { id: 1, quantity: 4 },
  { id: 2, quantity: 3 },
  { id: 3, quantity: 1 },
];

export function getCartItemsWithPrice() {
  const cartItemsList = itemsFromDb
    .filter((item) => cartItems.some((cartItem) => cartItem.id === item.id))
    .map((item) => ({
      ...item,
      quantity: cartItems.find((cartItem) => cartItem.id === item.id)?.quantity,
    }));

  return cartItemsList;
}
