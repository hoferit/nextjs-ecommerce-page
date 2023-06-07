import { expect, test } from '@playwright/test';

test('Add to cart, change quantity and remove from cart', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  await page.getByTestId('product-1').click();
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('1')).toBeVisible();

  // test increment and decrement buttons
  await page.getByTestId('product-increment').click();
  await page.getByTestId('product-increment').click();
  await page.getByTestId('product-decrement').click();

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('3')).toBeVisible();

  // test another product
  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  await page.getByTestId('product-3').click();
  await expect(page).toHaveURL('http://localhost:3000/products/3');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('3')).toBeVisible();

  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await expect(
    page.locator('main >> [data-test-id^="cart-product-quantity-"]'),
  ).toHaveCount(2);

  await expect(
    page.locator('main >> [data-test-id^="cart-product-remove-"]'),
  ).toHaveCount(2);

  // change quantity
  await page
    .getByTestId('cart-product-1')
    .getByTestId('product-increment')
    .click();
  await page
    .getByTestId('cart-product-1')
    .getByTestId('product-increment')
    .click();
  await page
    .getByTestId('cart-product-1')
    .getByTestId('product-decrement')
    .click();

  await expect(
    page.getByTestId('cart-product-quantity-1').getByText('4'),
  ).toBeVisible();

  await page.getByTestId('cart-product-remove-1').click();

  await expect(
    page.locator('main >> [data-test-id^="cart-product-"]'),
  ).toHaveCount(3);
});
