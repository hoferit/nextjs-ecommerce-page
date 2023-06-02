import { getCartItemsWithPrice } from './getcartitemspriceactions';

export default async function TotalPrice() {
  const cartItems = await getCartItemsWithPrice();
  console.log(cartItems);
  const total = cartItems
    .map((cartItem) => {
      return cartItem.quantity * cartItem.price;
    })
    .reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);
  console.log(total);
  return <div data-test-id="cart-total">Total Price: {total}</div>;
}
