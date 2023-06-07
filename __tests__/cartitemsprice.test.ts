import { expect, test } from '@jest/globals';
import { getCartItemsWithPrice } from '../util/testfunctions/getcartitemswithprice';

test('multiply cart items with price', () => {
  const cartItems = getCartItemsWithPrice();
  expect(cartItems).toStrictEqual([
    {
      quantity: 4,
      id: 1,
      name: 'Millie',
      type: 'Alpaca',
      price: 30,
    },
    {
      quantity: 3,
      id: 2,
      name: 'Petey',
      type: 'Bunny',
      price: 50,
    },
    {
      quantity: 1,
      id: 3,
      name: 'Selma',
      type: 'Cow',
      price: 45,
    },
  ]);
  expect(cartItems).toBeInstanceOf(Array);
});
