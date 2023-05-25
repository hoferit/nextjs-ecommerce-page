'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateCart(productId, quantity) {
  // 1. get the current cookie from request headers
  const cartCookie = getCookie('cart');
  // 2. parse the cookie
  const cartItems = !cartCookie
    ? // case A: cookie is undefined
      // if undefined
      // create new array with cartQuantity inside
      []
    : parseJson(cartCookie);

  // now get cartQuantity from cookies or undefined
  const cartUpdate = cartItems.find((cartItem) => {
    return cartItem.id === productId;
  });

  // case B: cookie is defined but item is in action
  // if we are at item 1
  // [{id:1, quantity:3}]
  if (cartUpdate) {
    // update the cartItems
    cartUpdate.quantity = quantity;
  } else {
    // case C: cookie is defined but no item in action
    // if we are at item 1
    // [{id:2, quantity: 3}]
    cartItems.push({
      // we insert the quantity
      id: productId,
      quantity,
    });
  }
  // 4. override the cookie
  // This sets the cookies into the Response Headers
  await cookies().set('cart', JSON.stringify(cartItems));
}
