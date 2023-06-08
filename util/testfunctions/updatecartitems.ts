import { CartItem } from '../../app/products/[productId]/addProductAmount';

const cartItems = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 },
  { id: 3, quantity: 1 },
];
export function updateCartItems(productId: number, quantity: number) {
  const cartUpdate = cartItems.find((cartItem: CartItem) => {
    return cartItem.id === productId;
  });

  if (cartUpdate) {
    cartUpdate.quantity += quantity;
  } else {
    cartItems.push({
      id: productId,
      quantity,
    });
  }
  return cartItems;
}
