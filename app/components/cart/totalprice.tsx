import styles from '../../styles/cartpage.module.scss';
import CheckoutButton from './CheckoutButton';
import { getCartItemsWithPrice } from './getCartItemsWithPrice';

export const dynamic = 'force-dynamic';

export default async function TotalPrice() {
  const cartItems = await getCartItemsWithPrice();
  const total = cartItems
    .map((cartItem) => {
      return cartItem.quantity * cartItem.price;
    })
    .reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);
  return total !== 0 ? (
    <div className={styles.total}>
      <div className={styles.totalPrice} data-test-id="cart-total">
        Total Price: {total} €
      </div>
      <CheckoutButton />
    </div>
  ) : (
    <h2>Your Shopping Cart is empty!</h2>
  );
}
