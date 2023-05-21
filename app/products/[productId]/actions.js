'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateCart(productId, value) {
  // 1. get the current cookie from request headers
  const cartCookie = getCookie('cartValue');
  // 2. parse the cookie
  const cartItems = !cartCookie
    ? // case A: cookie is undefined
      // if undefined
      // create new array with cartValue inside
      []
    : parseJson(cartCookie);

  // now get cartValue from cookies or undefined
  const cartUpdate = cartItems.find((cartItem) => {
    return cartItem.id === productId;
  });

  // case B: cookie is defined but item is in action
  // if we are at item 1
  // [{id:1, value:3}]
  if (cartUpdate) {
    // update the cartItems
    cartUpdate.value = value;
  } else {
    // case C: cookie is defined but no item in action
    // if we are at item 1
    // [{id:2, value: 3}]
    cartItems.push({
      // we insert the value
      id: productId,
      value,
    });
  }
  // 4. override the cookie
  // This sets the cookies into the Response Headers
  await cookies().set('cartItems', JSON.stringify(cartItems));
}
