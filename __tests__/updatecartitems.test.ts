import { expect, test } from '@jest/globals';
import { updateCartItems } from '../util/testfunctions/updatecartitems';

test('update quantity of cart item', () => {
  const cartItems = updateCartItems(1, 3);
  expect(cartItems).toStrictEqual([
    { id: 1, quantity: 4 },
    { id: 2, quantity: 1 },
    { id: 3, quantity: 1 },
  ]);
  expect(cartItems).toBeInstanceOf(Array);
});
