import { getCartItemsWithPrice } from './getcartitemspriceactions';

export const dynamic = 'force-dynamic';

export default async function TotalPrice() {
  const cartItems = await getCartItemsWithPrice();
  const total = cartItems
    .map((cartItem) => {
      return cartItem.quantity * cartItem.price;
    })
    .reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);
  return <div data-test-id="cart-total">Total Price: {total} €</div>;
}
