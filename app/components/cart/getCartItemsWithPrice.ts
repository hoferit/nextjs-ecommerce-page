'use server';

import { getProducts } from '../../../database/products';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

type CartItemWithPrice = {
  id: number;
  quantity?: number;
  price: number;
};
export async function getCartItemsWithPrice() {
  const cartCookie = getCookie('cart');

  const cartItems = !cartCookie ? [] : parseJson(cartCookie);

  const itemsFromDb = await getProducts();

  const cartItemsList = itemsFromDb
    .filter((item: CartItemWithPrice) =>
      cartItems.some((cartItem: CartItemWithPrice) => cartItem.id === item.id),
    )
    .map((item: CartItemWithPrice) => ({
      ...item,
      quantity: cartItems.find(
        (cartItem: CartItemWithPrice) => cartItem.id === item.id,
      )?.quantity,
    }));

  return cartItemsList;
}
