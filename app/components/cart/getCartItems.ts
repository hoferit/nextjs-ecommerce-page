'use server';

import { getProducts } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import { CartItem } from '../../products/[productId]/addProductAmount';

export async function getCartItems() {
  const cartCookie = getCookie('cart');

  const cartItems = !cartCookie ? [] : parseJson(cartCookie);

  const items = await getProducts();

  const cartItemsList = items
    .filter((item: CartItem) =>
      cartItems.some((cartItem: CartItem) => cartItem.id === item.id),
    )
    .map((item: CartItem) => ({
      ...item,
      quantity: cartItems.find((cartItem: CartItem) => cartItem.id === item.id)
        ?.quantity,
    }));

  return cartItemsList;
}
