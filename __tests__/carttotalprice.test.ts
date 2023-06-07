import { expect, test } from '@jest/globals';
import { cartSum } from '../util/testfunctions/cartsum';

test('update quantity of cart item', () => {
  const total = cartSum();
  expect(total).toStrictEqual(120);
  expect(typeof total).toBe('number');
});
