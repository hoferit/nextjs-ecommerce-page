'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export type CartItem = {
  id: number | string;
  quantity?: number;
};

export async function addProductAmount(productId: number, quantity: number) {
  const cartCookie = getCookie('cart'); // get cart
  const cartItems = !cartCookie ? [] : parseJson(cartCookie); // check if cart existing, if not create empty array else parseJSON cart

  // use find to get the needed product for the cart
  const cartUpdate = cartItems.find((cartItem: CartItem) => {
    return cartItem.id === productId;
  });

  if (cartUpdate) {
    // check if cartUpdate exists. If yes, product is already in cart, and increment the quantity of cartUpdate by quantity.
    cartUpdate.quantity += quantity;
  } else {
    // if not - product is not yet in cart. new item is created and added to the cartItems array, with the id and quantity properties set to the productId and quantity parameters.

    cartItems.push({
      id: productId,
      quantity,
    });
  }
  // This sets the cookies into the Response Headers
  await cookies().set('cart', JSON.stringify(cartItems));
}
