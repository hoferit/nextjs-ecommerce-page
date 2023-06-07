import { expect, test } from '@playwright/test';

test('test checkout flow', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByTestId('products-link').click();
  await expect(page).toHaveURL('http://localhost:3000/products');

  await page.getByTestId('product-3').click();
  await expect(page).toHaveURL('http://localhost:3000/products/3');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('1')).toBeVisible();

  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  await page.getByTestId('cart-checkout').click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');

  await expect(page.getByTestId('checkout-first-name')).toBeVisible();
  await page.getByTestId('checkout-first-name').fill('Heinz');

  await expect(page.getByTestId('checkout-last-name')).toBeVisible();
  await page.getByTestId('checkout-last-name').fill('Meier');

  await expect(page.getByTestId('checkout-email')).toBeVisible();
  await page.getByTestId('checkout-email').fill('heinz.meier@meier.com');

  await expect(page.getByTestId('checkout-address')).toBeVisible();
  await page.getByTestId('checkout-address').fill('Strasse 25');

  await expect(page.getByTestId('checkout-postal-code')).toBeVisible();
  await page.getByTestId('checkout-postal-code').fill('1337');

  await expect(page.getByTestId('checkout-city')).toBeVisible();
  await page.getByTestId('checkout-city').fill('Stadt');

  await expect(page.getByTestId('checkout-country')).toBeVisible();
  await page.getByTestId('checkout-country').fill('Land');

  // Proceed to payment info
  await expect(page.getByTestId('checkout-credit-card')).toBeVisible();
  await page.getByTestId('checkout-credit-card').fill('1337133713371337');

  await expect(page.getByTestId('checkout-expiration-date')).toBeVisible();
  await page.getByTestId('checkout-expiration-date').fill('13/37');

  await expect(page.getByTestId('checkout-security-code')).toBeVisible();
  await page.getByTestId('checkout-security-code').fill('137');

  // Proceed to checkout Button
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await page.getByTestId('checkout-confirm-order').click();

  // Finish
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
  await expect(
    page.getByRole('heading', {
      name: 'Thank you for Shopping at SpeedyPals!',
    }),
  ).toBeVisible();
});
