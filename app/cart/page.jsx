import '../styles/globals.scss';
import Link from 'next/link';
import CartItems from '../components/cart/cartitems';
import TotalPrice from '../components/cart/totalprice';
import styles from '../styles/cartPage.module.scss';

export default function ShoppingCartPage() {
  return (
    <main className={styles.main}>
      <h1>Basket</h1>
      <section className={styles.items}>
        <div className={styles.itemsWrapper}>
          {/* @ts-expect-error Server Component */}
          <CartItems />
        </div>
      </section>
      <section className={styles.total}>
        <TotalPrice />
        <br />
        <Link
          className={styles.checkoutButtonLink}
          href="/checkout"
          data-test-id="cart-checkout"
        >
          <span className={styles.checkoutButton}>Checkout</span>
        </Link>
      </section>
    </main>
  );
}
