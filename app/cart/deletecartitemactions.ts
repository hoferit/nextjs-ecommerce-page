'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { CartItem } from '../products/[productId]/actions';

export async function deleteCartItem(productId: number) {
  const cartCookie = getCookie('cart');

  const cartItems = !cartCookie ? [] : parseJson(cartCookie);

  const index = cartItems.findIndex(
    (cartItem: CartItem) => cartItem.id === productId,
  );
  cartItems.splice(index, 1);

  await cookies().set('cart', JSON.stringify(cartItems));
}
